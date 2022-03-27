import Spinner from "./Spinner";

const ShowSummariesContainer: React.FC<{ loading: boolean }> = ({
  loading,
  children,
}) => {
  if (loading) return <Spinner />;

  return (
    <main>
      {children}

      <style jsx>
        {`
          main {
            padding: 2rem 0.5rem;

            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1rem;
          }

          @media (min-width: 992px) {
            main {
              padding: 2rem 10vw;
            }
          }
        `}
      </style>
    </main>
  );
};

export default ShowSummariesContainer;
