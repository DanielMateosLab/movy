const Spinner: React.FC = () => (
  <>
    <div aria-label="Loading..." className="loading" data-testid="spinner" />

    <style jsx>
      {`
        .loading {
          margin: 2rem auto;

          width: 4rem;
          height: 4rem;
          border: 0.25rem solid rgba(0, 0, 0, 0.3);
          border-radius: 50%;

          border-top-color: rgba(0, 0, 0, 0.9);
          animation: spin 1s ease-in-out infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}
    </style>
  </>
);

export default Spinner;
