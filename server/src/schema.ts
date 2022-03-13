import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    moviesByTitle(title: String!, type: Type, page: Int): MovieSummaryResponse!
  }

  enum Type {
    EPISODE
    SERIES
    MOVIE
  }

  type MovieSummary {
    id: ID!
    title: String!
    type: Type!
    poster: String!
    year: Int!
  }

  type MovieSummaryResponse {
    result: [MovieSummary]!
    totalResults: Int!
    page: Int!
  }
`;
