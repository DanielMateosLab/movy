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
            display: flex;
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
          }
        `}
      </style>
    </main>
  );
};

export default ShowSummariesContainer;
