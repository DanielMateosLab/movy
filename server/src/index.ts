import "dotenv/config";
import { ApolloServer } from "apollo-server";
import mocks from "./mocks";
import resolvers from "./resolvers";
import { typeDefs } from "./schema";
import checkConfigVars from "./config";

checkConfigVars();

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
});

const port = process.env.PORT || 4000;

server.listen({ port }).then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${port}
    📭  Query at https://studio.apollographql.com/dev
  `);
});
