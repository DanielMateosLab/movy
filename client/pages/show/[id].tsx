import { gql, useQuery } from "@apollo/client";
import AppHeader from "components/AppHeader";
import Layout from "components/Layout";
import ShowDetailsCard from "components/ShowDetailsCard";
import Spinner from "components/Spinner";
import { NextPage } from "next";
import { useRouter } from "next/router";
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

  return (
    <Layout>
      <AppHeader />

      {loading && <Spinner />}

      {data?.showById && <ShowDetailsCard show={data.showById} />}
    </Layout>
  );
};

export default ShowPage;
