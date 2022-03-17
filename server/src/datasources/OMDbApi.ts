import { RESTDataSource } from "apollo-datasource-rest";
import { UserInputError } from "apollo-server";
import { OMDb_API_KEY } from "../config";
import { ApiShow, SearchShowsByTitleApiResponse } from "../types";
import {
  QueryShowByIdArgs,
  QueryShowsByTitleArgs,
  Show,
} from "../types/graphql";

class OMDbApi extends RESTDataSource {
  constructor() {
    super();

    this.baseURL = "http://www.omdbapi.com/";
  }

  async searchShowsByTitle({ title, type, page }: QueryShowsByTitleArgs) {
    const result: SearchShowsByTitleApiResponse = await this.get("", {
      s: title,
      type: type || "",
      page: page || 1,
      apikey: OMDb_API_KEY,
    });

    if (result.Response == "True") {
      return {
        result: result.Search,
        totalResults: result.totalResults,
        page: page || 1,
      };
    }

    throw new UserInputError(result.Error);
  }

  getShowById({ id }: QueryShowByIdArgs): Promise<ApiShow> {
    return this.get("", {
      i: id,
      apiKey: OMDb_API_KEY,
    });
  }
}

export default OMDbApi;
