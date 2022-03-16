import { ApolloServer } from "apollo-server";
import mocks from "../mocks";
import resolvers from "../resolvers";
import { typeDefs } from "../schema";

describe("Queries", () => {
  // TODO: write tests
  describe.skip("Query.showsByTitle", () => {
    it("gets a list of shows with a valid search string", async () => {
      const testServer = new ApolloServer({
        typeDefs,
        resolvers,
        mocks,
      });

      const result = await testServer.executeOperation({
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
        variables: { title: "validSearch" },
      });

      expect(result.errors).toBeUndefined();
      expect(result.data?.moviesByTitle.result[0].title).toBe(
        "Star Wars: Episode IV - A New Hope"
      );
    });
  });
  describe.skip("Query.showById", () => {});
});
