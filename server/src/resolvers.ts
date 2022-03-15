import { DataSources } from "./datasources";
import { Resolvers } from "./types/graphql";

const enumResolvers = {
  Type: {
    MOVIE: "movie",
    SERIES: "series",
    EPISODE: "episode",
  },
};

type ExtendedResolvers = Resolvers<{
  dataSources: DataSources;
}> &
  typeof enumResolvers;

const resolvers: ExtendedResolvers = {
  Query: {
    showsByTitle: (_, { title, type, page }, { dataSources }) => {
      console.log(title, type, page);
      return dataSources.omdbApi.searchShowsByTitle(title, type, page);
    },
  },
  ...enumResolvers,
};

export default resolvers;
