import { ApolloServer } from "apollo-server";
import resolvers from "../resolvers";
import { typeDefs } from "../schema";
import OMDbApi from "../datasources/OMDbApi";
import { errorMockResponse, showsByTitleMockRes } from "./mockApiResults";

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
    // We define the standard operation we want to test
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

    it("gets a list of shows with a valid search string", async () => {
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
  describe.skip("Query.showById", () => {});
});
