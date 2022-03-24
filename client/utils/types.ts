import { Type } from "./graphqlTypes";

export interface ShowsByTitleArgs {
  title: string;
  type: Type;
  page: number;
}

export type SearchFormValues = Pick<ShowsByTitleArgs, "title" | "type">;
