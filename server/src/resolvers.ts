import { ApiShow, AppContextType, ShowType } from "./types";
import { Resolvers } from "./types/graphql";

const resolvers: Resolvers = {
  Query: {
    showsByTitle: (_, { title, type, page }, { dataSources }) => {
      return dataSources.omdbApi.searchShowsByTitle({ title, type, page });
    },
    showById: (_, { id }, { dataSources }) => {
      return dataSources.omdbApi.getShowById({ id });
    },
  },
  Show: {
    id: ({ imdbID }) => imdbID,
    type: ({ Type }) => Type,
    title: ({ Title }) => Title,
    poster: ({ Poster }) => Poster,
    year: ({ Year }) => Year,
    genre: (parent, _, { dataSources }) => {
      return dataSources.omdbApi.getPropertyFromParentOrAPI("Genre", parent);
    },
    plot: (parent, _, { dataSources }) => {
      return dataSources.omdbApi.getPropertyFromParentOrAPI("Plot", parent);
    },
    director: (parent, _, { dataSources }) => {
      return dataSources.omdbApi.getPropertyFromParentOrAPI("Director", parent);
    },
    actors: (parent, _, { dataSources }) => {
      return dataSources.omdbApi.getPropertyFromParentOrAPI("Actors", parent);
    },
    writer: (parent, _, { dataSources }) => {
      return dataSources.omdbApi.getPropertyFromParentOrAPI("Writer", parent);
    },
    awards: (parent, _, { dataSources }) => {
      return dataSources.omdbApi.getPropertyFromParentOrAPI("Awards", parent);
    },
  },
  Type: ShowType,
};

export default resolvers;
