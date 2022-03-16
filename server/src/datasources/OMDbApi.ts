import { RESTDataSource } from "apollo-datasource-rest";
import { UserInputError } from "apollo-server";
import { OMDb_API_KEY } from "../config";
import { SearchShowsByTitleApiResponse } from "../types";
import { ShowsByTitleResponse } from "../types/graphql";

class OMDbApi extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = "http://www.omdbapi.com/";
  }

  async searchShowsByTitle(
    title: string,
    type: string = "",
    page: number = 1
  ): Promise<ShowsByTitleResponse> {
    const result: SearchShowsByTitleApiResponse = await this.get("", {
      s: title,
      type,
      page,
      apikey: OMDb_API_KEY,
    });

    if (result.Response == "True") {
      // We parse the shows' keys to match the schema
      const parsedShows = result.Search.map((show) => ({
        id: show.imdbID,
        type: show.Type as any, // TODO: how to implement enums with graphql codegen
        title: show.Title,
        poster: show.Poster,
        year: +show.Year,
      }));

      return {
        result: parsedShows,
        totalResults: result.totalResults,
        page,
      };
    }

    throw new UserInputError(result.Error);
  }

  getShowById(id: string) {
    return this.get("", {
      i: id,
      apikey: OMDb_API_KEY,
    });
  }
}

export default OMDbApi;
