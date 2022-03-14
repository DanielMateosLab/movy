import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Type: {
      MOVIE: "movie",
      SERIES: "series",
      EPISODE: "episode",
    },
  },
  mocks: {
    Query: () => ({
      moviesByTitle: () => ({
        result: [...new Array(10)],
      }),
    }),
    MovieSummary: () => ({
      id: () => "tt0076759",
      poster: () =>
        "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      title: () => "Star Wars: Episode IV - A New Hope",
      type: () => "movie",
      year: () => "1977",
    }),
  },
});

const port = process.env.PORT || 4000;

server.listen({ port }).then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${port}
    📭  Query at https://studio.apollographql.com/dev
  `);
});
