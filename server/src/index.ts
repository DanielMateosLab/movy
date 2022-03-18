import "dotenv/config";
import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import { typeDefs } from "./schema";
import checkConfigVars from "./config";
import dataSources from "./datasources";

checkConfigVars();

export const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

const port = process.env.PORT || 4000;

server.listen({ port }).then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port ${port}
    📭  Query at https://studio.apollographql.com/dev
  `);
});
