import { ApolloServer } from "apollo-server";
import resolvers from "../resolvers";
import { typeDefs } from "../schema";
import OMDbApi from "../datasources/OMDbApi";
import {
  errorMockResponse,
  showByIdMockResponse,
  showsByTitleMockRes,
} from "./mockApiResults";
import { toReadableJSON } from "./utils";

/** Here resolvers and dataSources are tested in conjunction.
 *  To do so, I mock the response from the get() method of the RESTDataSource
 *  class with real responses of the OMDbAPI.
 */

describe("Queries", () => {
  let omdbApi: OMDbApi;
  let testServer: ApolloServer;

  beforeEach(() => {
    omdbApi = new OMDbApi();

    testServer = new ApolloServer({
      typeDefs,
      resolvers,
      dataSources: () => ({ omdbApi }),
    });
  });
  describe("Query.showsByTitle", () => {
    describe("Simple Search Show Query", () => {
      // This query tries to fetch only for the fields we get from a normal
      // "search by title" OMDbAPI request.
      const operation = {
        query: `
        query TestQuery($title: String!) {
          showsByTitle(title: $title) {
            result {
              title
              type
              id
              poster
              year
            }
          totalResults
          page
            }
          }
        `,
        variables: { title: "mock" },
      };

      it("gets a list of shows", async () => {
        // Mock a success response from API
        // @ts-ignore - We skip checks here because get is a protected method
        // and we can not call .mockImplementationValueOnce() on it
        OMDbApi.prototype.get = jest.fn(async () => showsByTitleMockRes);

        const result = await testServer.executeOperation(operation);

        expect(result.errors).toBeUndefined();
        expect(result.data).toBeDefined();
        expect(result).toMatchSnapshot();
      });

      it("returns an error if with an invalid search string", async () => {
        // @ts-ignore
        OMDbApi.prototype.get = jest.fn(async () => errorMockResponse);

        const result = await testServer.executeOperation(operation);

        expect(result.data).toBeNull();
        expect(result.errors).toBeDefined();
        expect(result).toMatchSnapshot();
      });
    });

    describe("Complex Search Query", () => {
      // This query tries to fetch all the details of a show, so additional
      // requests to "show by id" OMDbAPI endpoints are needed.
      const operation = {
        query: `
         query TestQuery($title: String!) {
            showsByTitle(title: $title) {
              result {
                id
                type
                title
                poster
                year
                genre
                plot
                director
                actors
                writer
                awards
              }
            }
          }
        `,
        variables: { title: "mock" },
      };

      it("gets a list of shows", async () => {
        // We mock .get() method so it differenciates between searchs by title or by id
        const mockGet = jest.fn(async (_, queryParams) => {
          // If "i" is in queryParams, we are searching by id
          if ("i" in queryParams) return showByIdMockResponse;
          // Else, we are searching by title
          return showsByTitleMockRes;
        });

        // @ts-ignore
        OMDbApi.prototype.get = mockGet;

        const result = await testServer.executeOperation(operation);

        console.log(toReadableJSON(result));

        expect(result.errors).toBeUndefined();
        expect(result.data).toBeDefined();
      });
    });
  });
  describe.skip("Query.showById", () => {});
});
