import { Resolvers } from "./types/graphql";

const enumResolvers = {
  Type: {
    MOVIE: "movie",
    SERIES: "series",
    EPISODE: "episode",
  },
};

type ExtendedResolvers = Resolvers & typeof enumResolvers;

const resolvers: ExtendedResolvers = { ...enumResolvers };

export default resolvers;
