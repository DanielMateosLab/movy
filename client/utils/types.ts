import { Show, Type } from "./graphqlTypes";

export interface ShowsByTitleArgs {
  title: string;
  type: Type;
  page: number;
}

export type SearchFormValues = Pick<ShowsByTitleArgs, "title" | "type">;

export type ShowSummary = Pick<
  Show,
  "id" | "type" | "title" | "year" | "poster"
>;
