import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    moviesByTitle(title: String!, type: Type, page: Int): MovieSummaryResponse!
  }

  type MovieSummaryResponse {
    result: [MovieSummary]!
    totalResults: Int!
    page: Int!
  }

  type MovieSummary {
    id: ID!
    title: String!
    type: Type!
    poster: String!
    year: Int!
  }

  enum Type {
    EPISODE
    SERIES
    MOVIE
  }
`;
