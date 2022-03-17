import { RESTDataSource } from "apollo-datasource-rest";
import { OMDb_API_KEY } from "../config";
import {
  ApiShow,
  GetShowByIdApiResponse,
  SearchShowsByTitleApiResponse,
} from "../types";
import { QueryShowByIdArgs, QueryShowsByTitleArgs } from "../types/graphql";

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

    return {
      result: [],
      totalResults: 0,
      page: 1,
    };
  }

  async getShowById({ id }: QueryShowByIdArgs): Promise<ApiShow | null> {
    const result: GetShowByIdApiResponse = await this.get("", {
      i: id,
      apiKey: OMDb_API_KEY,
    });

    if (result.Response == "True") {
      const { Response, ...show } = result;

      return show;
    }

    return null;
  }

  /**
   * Returns parent[property] if it is defined.
   * If not, calls OMDbApi "search by id" endpoint to get "property"
   * and returns it.
   */
  async getPropertyFromParentOrAPI(property: keyof ApiShow, parent: ApiShow) {
    if (property in parent) return property;

    return (await this.getShowById({ id: parent.imdbID }))![property];
  }
}

export default OMDbApi;
