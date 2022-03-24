import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";
import { Type } from "./graphqlTypes";
import { ShowsByTitleArgs } from "./types";

export const showsByTitleArgs = makeVar<ShowsByTitleArgs>({
  title: "",
  type: Type.All,
  page: 1,
});

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SERVER_URI,
  cache: new InMemoryCache(),
});

export default apolloClient;
