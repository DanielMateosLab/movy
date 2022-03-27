import { gql } from "@apollo/client";
import AppHeader from "components/AppHeader";
import Layout from "components/Layout";
import { NextPage } from "next";
import { useRouter } from "next/router";

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
  const { query } = useRouter();

  return (
    <Layout>
      <AppHeader />
      {query.id}
    </Layout>
  );
};

export default ShowPage;
