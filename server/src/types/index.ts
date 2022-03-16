import { dataSources } from "../datasources";

export type DataSources = ReturnType<typeof dataSources>;

export type ContextType = {
  dataSources: DataSources;
};

export interface ApiShow {
  imdbID: string;
  Type: ShowType;
  Title: string;
  Poster: string;
  Year: string;

  Genre?: string;
  Plot?: string;
  Actors?: string;
  Director?: string;
  Writer?: string;
  Awards?: string;
  // The API will return more fields we are not interested in
  [key: string]: any;
}

type ApiShowSummary = Pick<
  ApiShow,
  "imdbID" | "Type" | "Title" | "Poster" | "Year"
>;

/** Search by title response.
 *  There are two possible result types, we can use "Response"
 *  property to distinguish them.
 */
export type SearchShowsByTitleApiResponse =
  // Success response
  | {
      Response: "True";
      Search: ApiShowSummary[];
      totalResults: number;
    }
  | ErrorResponse;

/** Response when searching by Id */
export type getShowByIdApiResponse =
  | ({ Response: "True" } & ApiShow)
  | ErrorResponse;

/** Returned when there is an error or there are no results  */
type ErrorResponse = {
  Response: "False";
  Error: string;
};

enum ShowType {
  MOVIE = "movie",
  SERIES = "series",
  EPISODE = "episode",
}
