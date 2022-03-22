import type { NextPage } from "next";
import Layout from "components/Layout";
import AppHeader from "components/AppHeader";

const Home: NextPage = () => {
  return (
    <Layout>
      <AppHeader />
      <main></main>
    </Layout>
  );
};

export default Home;
