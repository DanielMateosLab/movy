import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Query = {
  __typename?: 'Query';
  /** Get a single show information by its id */
  showById?: Maybe<Show>;
  /** Get shows that match a title pattern. We can specify the show type and the results page */
  showsByTitle: ShowsByTitleResponse;
};


export type QueryShowByIdArgs = {
  id: Scalars['ID'];
};


export type QueryShowsByTitleArgs = {
  page?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
  type?: InputMaybe<Type>;
};

/** A show is a movie, series or an episode */
export type Show = {
  __typename?: 'Show';
  /** Highlighted actors */
  actors: Scalars['String'];
  /** Highlighted awards */
  awards: Scalars['String'];
  /** The person in charge of the dramatic and artistic aspects */
  director: Scalars['String'];
  /** The main theme, like 'terror' or 'fiction' */
  genre: Scalars['String'];
  id: Scalars['ID'];
  /** A small description or introduction to the show content */
  plot: Scalars['String'];
  /** The image url */
  poster: Scalars['String'];
  title: Scalars['String'];
  /** The kind of show */
  type: Type;
  /** The person who wrote the scripts */
  writer: Scalars['String'];
  /** The year the show was released */
  year: Scalars['String'];
};

/**
 * The response of searching a show by title. It contains up to 10 show results,
 * the page number, the total results for the query.
 */
export type ShowsByTitleResponse = {
  __typename?: 'ShowsByTitleResponse';
  page: Scalars['Int'];
  result: Array<Maybe<Show>>;
  totalResults: Scalars['Int'];
};

export enum Type {
  All = 'ALL',
  Episode = 'EPISODE',
  Movie = 'MOVIE',
  Series = 'SERIES'
}

export type ShowByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ShowByIdQuery = { __typename?: 'Query', showById?: { __typename?: 'Show', poster: string, title: string, type: Type, year: string, plot: string, genre: string, actors: string, director: string, writer: string, awards: string } | null };

export type ShowsByTitleSummaryQueryVariables = Exact<{
  title: Scalars['String'];
  type?: InputMaybe<Type>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type ShowsByTitleSummaryQuery = { __typename?: 'Query', showsByTitle: { __typename?: 'ShowsByTitleResponse', totalResults: number, page: number, result: Array<{ __typename?: 'Show', id: string, type: Type, title: string, poster: string, year: string } | null> } };


export const ShowByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"showById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"year"}},{"kind":"Field","name":{"kind":"Name","value":"plot"}},{"kind":"Field","name":{"kind":"Name","value":"genre"}},{"kind":"Field","name":{"kind":"Name","value":"actors"}},{"kind":"Field","name":{"kind":"Name","value":"director"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"awards"}}]}}]}}]} as unknown as DocumentNode<ShowByIdQuery, ShowByIdQueryVariables>;
export const ShowsByTitleSummaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ShowsByTitleSummary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Type"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"showsByTitle"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"title"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"poster"}},{"kind":"Field","name":{"kind":"Name","value":"year"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalResults"}},{"kind":"Field","name":{"kind":"Name","value":"page"}}]}}]}}]} as unknown as DocumentNode<ShowsByTitleSummaryQuery, ShowsByTitleSummaryQueryVariables>;