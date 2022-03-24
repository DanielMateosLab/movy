export interface ShowsByTitleArgs {
  title: string;
  type: string;
  page: number;
}

export type SearchFormValues = Pick<ShowsByTitleArgs, "title" | "type">;
