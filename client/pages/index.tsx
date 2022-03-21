import type { NextPage } from "next";
import Head from "next/head";
import Brand from "components/Brand";
import SearchForm from "components/SearchForm";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Movy</title>
        <meta
          name="description"
          content="Get detailed information of your favourite shows"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <Brand />
          <SearchForm />
        </header>
      </main>

      <style jsx>
        {`
          header {
            padding: 2rem;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
