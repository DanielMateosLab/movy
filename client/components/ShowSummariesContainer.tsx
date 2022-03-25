import Spinner from "./Spinner";

const ShowSummariesContainer: React.FC<{ loading: boolean }> = ({
  loading,
  children,
}) => {
  if (loading)
    return (
      <main className="centered">
        <Spinner />

        <style jsx>
          {`
            .centered {
              margin: 2rem auto;
            }
          `}
        </style>
      </main>
    );

  return (
    <main>
      {children}

      <style jsx>
        {`
          main {
            max-width: 786px;
            margin: 0 auto;

            padding: 1rem;
          }
        `}
      </style>
    </main>
  );
};

export default ShowSummariesContainer;
