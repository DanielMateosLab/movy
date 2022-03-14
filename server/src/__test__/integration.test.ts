import { ApolloServer } from "apollo-server";
import mocks from "../mocks";
import resolvers from "../resolvers";
import { typeDefs } from "../schema";

describe("Queries", () => {
  it("gets a list of movieSummaries", async () => {
    const testServer = new ApolloServer({
      typeDefs,
      resolvers,
      mocks,
    });

    const result = await testServer.executeOperation({
      query: `
        query TestQuery($title: String!) {
          moviesByTitle(title: $title) {
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
      variables: { title: "Star Wars: Episode IV - A New Hope" },
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.moviesByTitle.result[0].title).toBe(
      "Star Wars: Episode IV - A New Hope"
    );
  });
});
