import { ApiShow, AppContextType, ShowType } from "./types";
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
    ...generateParentOrAPIResolverForProperties(
      "Genre",
      "Plot",
      "Director",
      "Actors",
      "Writer",
      "Awards"
    ),
  },
  Type: ShowType,
};

/** Helper function that generates, for each property given, a resolver that will:
 *
 * - Try to return the property from the parents arg.
 * - Call OMDbAPI rest API searching the show by id, and return the asked
 *     show property.
 *
 * Those resolvers will be returned in an object whose keys are the properties
 * in lower case, so they match our Show schema type.
 */
function generateParentOrAPIResolverForProperties(
  ...properties: Array<keyof ApiShow>
) {
  return properties.reduce(
    (result, property) => ({
      ...result,
      // We return the property as lowercase to match our schema "Show"
      [String(property).toLowerCase()]: generateParentOrAPIResolver(property),
    }),
    {}
  );
}

/** For the given property, generates a resolver that uses OMDbAPI.getPropertyFromParentOrAPI() */
function generateParentOrAPIResolver(property: keyof ApiShow) {
  return (parent: ApiShow, _: undefined, { dataSources }: AppContextType) => {
    return dataSources.omdbApi.getPropertyFromParentOrAPI(property, parent);
  };
}

export default resolvers;
