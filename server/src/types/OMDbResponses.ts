export type SearchByTitleApiResponse =
  | {
      Response: "True";
      Search: [
        {
          Poster: string;
          Title: string;
          Type: "movie" | "series" | "episode";
          Year: string;
          imdbID: string;
        }
      ];
      totalResults: number;
    }
  | {
      Response: "False";
      Error: string;
    };
