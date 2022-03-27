import AppHeader from "components/AppHeader";
import Layout from "components/Layout";
import { NextPage } from "next";
import { useRouter } from "next/router";

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
