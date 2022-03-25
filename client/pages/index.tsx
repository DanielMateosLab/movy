import type { NextPage } from "next";
import Layout from "components/Layout";
import AppHeader from "components/AppHeader";
import SearchForm from "components/SearchForm";
import { gql, useLazyQuery, useReactiveVar } from "@apollo/client";
import { ShowsByTitleSummaryQuery } from "utils/graphqlTypes";
import { showsByTitleArgs } from "utils/apolloClient";
import { useEffect } from "react";

export const SHOWS_BY_TITLE = gql`
  query ShowsByTitleSummary($title: String!, $type: Type, $page: Int) {
    showsByTitle(title: $title, type: $type, page: $page) {
      result {
        id
        type
        title
        poster
        year
      }
      totalResults
      page
    }
  }
`;

const Home: NextPage = () => {
  const [searchShowsByTitle, { called, loading, data }] =
    useLazyQuery<ShowsByTitleSummaryQuery>(SHOWS_BY_TITLE, { ssr: false });

  const variables = useReactiveVar(showsByTitleArgs);

  useEffect(() => {
    // Avoid searching with an empty title
    variables.title && searchShowsByTitle({ variables });
  }, [variables]);

  return (
    <Layout>
      <AppHeader>
        <SearchForm {...{ called, data, loading }} />
      </AppHeader>

      <main></main>
    </Layout>
  );
};

export default Home;
