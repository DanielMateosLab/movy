import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logo from "public/logo.svg";

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
          <Image
            src={logo}
            alt="a video camera as the movy logo"
            layout="fill"
          />
          <h1>Movy</h1>
        </header>
      </main>

      <style jsx>
        {`
          header {
            max-width: fit-content;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
