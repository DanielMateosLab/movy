import Head from "next/head";
import Brand from "./Brand";
import SearchForm from "./SearchForm";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="root">
      <Head>
        <title>Movy</title>
        <meta
          name="description"
          content="Get detailed information of your favourite shows"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Brand />
        <SearchForm />
      </header>

      {children}

      <style jsx>
        {`
          header {
            padding: 2rem;
            background: white;
            border-bottom: 1px solid grey;
          }
          .root {
            min-height: 100vh;
            background: rgba(0, 0, 0, 0.075);
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
