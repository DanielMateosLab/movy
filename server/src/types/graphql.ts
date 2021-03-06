import { GraphQLResolveInfo } from 'graphql';
import { ApiShow, ShowType, AppContextType } from './index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CacheControlScope: CacheControlScope;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  Show: ResolverTypeWrapper<ApiShow>;
  ShowsByTitleResponse: ResolverTypeWrapper<Omit<ShowsByTitleResponse, 'result'> & { result: Array<Maybe<ResolversTypes['Show']>> }>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Type: ResolverTypeWrapper<ShowType>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Query: {};
  Show: ApiShow;
  ShowsByTitleResponse: Omit<ShowsByTitleResponse, 'result'> & { result: Array<Maybe<ResolversParentTypes['Show']>> };
  String: Scalars['String'];
}>;

export type CacheControlDirectiveArgs = {
  inheritMaxAge?: Maybe<Scalars['Boolean']>;
  maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>;
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = AppContextType, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = AppContextType, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  showById?: Resolver<Maybe<ResolversTypes['Show']>, ParentType, ContextType, RequireFields<QueryShowByIdArgs, 'id'>>;
  showsByTitle?: Resolver<ResolversTypes['ShowsByTitleResponse'], ParentType, ContextType, RequireFields<QueryShowsByTitleArgs, 'title'>>;
}>;

export type ShowResolvers<ContextType = AppContextType, ParentType extends ResolversParentTypes['Show'] = ResolversParentTypes['Show']> = ResolversObject<{
  actors?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  awards?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  director?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  genre?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  plot?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  poster?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['Type'], ParentType, ContextType>;
  writer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ShowsByTitleResponseResolvers<ContextType = AppContextType, ParentType extends ResolversParentTypes['ShowsByTitleResponse'] = ResolversParentTypes['ShowsByTitleResponse']> = ResolversObject<{
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  result?: Resolver<Array<Maybe<ResolversTypes['Show']>>, ParentType, ContextType>;
  totalResults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TypeResolvers = EnumResolverSignature<{ ALL?: any, EPISODE?: any, MOVIE?: any, SERIES?: any }, ResolversTypes['Type']>;

export type Resolvers<ContextType = AppContextType> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Show?: ShowResolvers<ContextType>;
  ShowsByTitleResponse?: ShowsByTitleResponseResolvers<ContextType>;
  Type?: TypeResolvers;
}>;

export type DirectiveResolvers<ContextType = AppContextType> = ResolversObject<{
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
}>;
