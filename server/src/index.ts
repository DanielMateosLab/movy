import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";

const server = new ApolloServer({
  typeDefs,
});

const port = process.env.PORT || 4000;

server.listen({ port }).then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${port}
    📭  Query at https://studio.apollographql.com/dev
  `);
});
