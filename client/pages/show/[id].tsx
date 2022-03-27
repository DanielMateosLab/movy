import { gql, useQuery } from "@apollo/client";
import AppHeader from "components/AppHeader";
import Layout from "components/Layout";
import ShowDetailsCard from "components/ShowDetailsCard";
import Spinner from "components/Spinner";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { SyntheticEvent } from "react";
import { ShowByIdQuery } from "utils/graphqlTypes";

const SHOW_BY_ID = gql`
  query ShowById($id: ID!) {
    showById(id: $id) {
      poster
      title
      type
      year
      plot
      genre
      actors
      director
      writer
      awards
    }
  }
`;

const ShowPage: NextPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const { loading, data } = useQuery<ShowByIdQuery>(SHOW_BY_ID, {
    variables: {
      id,
    },
    ssr: false,
  });

  function handleGoBack(event: SyntheticEvent) {
    event.preventDefault();

    router.back();
  }

  return (
    <>
      <Layout>
        <AppHeader>
          <a href="#" onClick={handleGoBack}>
            &lt; Back to results
          </a>
        </AppHeader>

        {loading && <Spinner />}

        {data?.showById && <ShowDetailsCard show={data.showById} />}
      </Layout>

      <style jsx>{`
        a {
          display: block;
          text-align: center;
          color: blue;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default ShowPage;
