import type { NextPage } from "next";
import Layout from "components/Layout";
import AppHeader from "components/AppHeader";
import SearchForm from "components/SearchForm";
import { gql, useLazyQuery } from "@apollo/client";
import { ShowsByTitleSummaryQuery } from "utils/graphqlTypes";
import { useEffect } from "react";
import ShowSummariesContainer from "components/ShowSummariesContainer";
import ShowSummaryCard from "components/ShowSummaryCard";
import { useRouter } from "next/router";
import Pagination from "components/Pagination";

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

  const router = useRouter();

  useEffect(() => {
    const title =
      typeof router.query.title == "string" ? router.query.title : undefined;

    const type =
      typeof router.query.type == "string" ? router.query.type : undefined;

    const page =
      typeof router.query.page == "string" ? +router.query.page : undefined;

    // Avoid searching with an empty title
    if (router.query.title) {
      searchShowsByTitle({
        variables: { title, type, page },
      });
    }
  }, [router.query]);

  return (
    <>
      <Layout>
        <AppHeader>
          <SearchForm {...{ called, data, loading }} />
        </AppHeader>

        <ShowSummariesContainer loading={loading}>
          {data && (
            <>
              {data.showsByTitle.result.map(
                (show) => show && <ShowSummaryCard show={show} key={show.id} />
              )}
            </>
          )}
        </ShowSummariesContainer>

        {data && (
          <footer>
            <Pagination
              totalResults={data.showsByTitle.totalResults}
              page={data.showsByTitle.page}
            />
          </footer>
        )}
      </Layout>

      <style jsx>
        {`
          footer {
            text-align: center;
            padding-bottom: 2rem;
          }
        `}
      </style>
    </>
  );
};

export default Home;
