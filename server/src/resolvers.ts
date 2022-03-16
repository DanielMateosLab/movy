import { ShowType } from "./types";
import { Resolvers } from "./types/graphql";

const resolvers: Resolvers = {
  Query: {
    showsByTitle: (_, { title, type, page }, { dataSources }) => {
      return dataSources.omdbApi.searchShowsByTitle({ title, type, page });
    },
  },
  Show: {
    id: ({ imdbID }) => imdbID,
    type: ({ Type }) => Type,
    title: ({ Title }) => Title,
    poster: ({ Poster }) => Poster,
    year: ({ Year }) => Year,
  },
  Type: ShowType,
};

export default resolvers;
