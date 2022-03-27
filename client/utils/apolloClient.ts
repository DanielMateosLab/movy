import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_SERVER_URI,
  cache: new InMemoryCache(),
});

export default apolloClient;
