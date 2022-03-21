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
          <div className="brand">
            <div className="logo">
              <Image src={logo} alt="a video camera as the movy logo" />
            </div>
            <h1 className="title">Movy</h1>
          </div>
        </header>
      </main>

      <style jsx>
        {`
          .brand {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
            gap: 2rem;
          }
          .logo {
            width: 15vh;
          }
          .title {
            font-size: 4rem;
            margin: 0;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
