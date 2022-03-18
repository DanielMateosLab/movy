import { gql } from "apollo-server";

export const typeDefs = gql`
  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }

  directive @cacheControl(
    maxAge: Int
    scope: CacheControlScope
    inheritMaxAge: Boolean
  ) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION

  type Query {
    "Get shows that match a title pattern. We can specify the show type and the results page"
    showsByTitle(title: String!, type: Type, page: Int): ShowsByTitleResponse!
    "Get a single show information by its id"
    showById(id: ID!): Show
  }

  """
  The response of searching a show by title. It contains up to 10 show results,
  the page number, the total results for the query.
  """
  type ShowsByTitleResponse {
    result: [Show]!
    totalResults: Int!
    page: Int!
  }

  "A show is a movie, series or an episode"
  type Show {
    id: ID!
    "The kind of show"
    type: Type!
    title: String!
    "The image url"
    poster: String!
    "The year the show was released"
    year: String!
    "The main theme, like 'terror' or 'fiction'"
    genre: String!
    "A small description or introduction to the show content"
    plot: String!
    "Highlighted actors"
    actors: String!
    "The person in charge of the dramatic and artistic aspects"
    director: String!
    "The person who wrote the scripts"
    writer: String!
    "Highlighted awards"
    awards: String!
  }

  enum Type {
    EPISODE
    SERIES
    MOVIE
  }
`;
