import Link from "next/link";
import { ShowSummary } from "utils/types";

const ShowSummaryCard: React.FC<{ show: ShowSummary }> = ({ show }) => {
  return (
    <>
      <Link href={"show/" + show.id}>
        <article role="link">
          <header className="layer">
            <h2>{show.title}</h2>
            <span className="year">{show.year}</span>
          </header>

          <span className="show-type layer">{show.type}</span>
        </article>
      </Link>

      <style jsx>
        {`
          article {
            background-image: url(${show.poster});
            background-size: cover;
            position: relative;
            height: 500px;
            border: 1px solid black;
            border-radius: 4px;
            cursor: pointer;
          }

          .layer {
            background: rgba(0, 0, 0, 0.85);
            color: rgb(212, 212, 212);
          }

          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 1rem;
          }

          .year {
            margin-left: 1rem;
          }

          span {
            font-weight: 600;
          }

          .show-type {
            padding: 0.5rem 1rem;
            border-radius: 2rem;
            position: absolute;
            bottom: 0.5rem;
            right: 0.5rem;
          }
        `}
      </style>
    </>
  );
};

export default ShowSummaryCard;
