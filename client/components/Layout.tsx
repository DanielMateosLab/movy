import Head from "next/head";

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

      {children}

      <style jsx>
        {`
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
