import { ShowByIdQuery } from "utils/graphqlTypes";

const ShowDetailsCard: React.FC<{
  show: NonNullable<ShowByIdQuery["showById"]>;
}> = ({ show }) => {
  return (
    <>
      <main className="container">
        <article className="card">
          <img src={show.poster} alt="show poster" />

          <div className="card-content">
            <header>
              <h1>{show.title}</h1>
              <span className="show-type">{show.type}</span>
            </header>
            <p>{show.plot}</p>
            <ul className="show-details">
              <Item name="Genre" value={show.genre} />
              <Item name="Released" value={show.year} />
              <Item name="Awards" value={show.awards} />
              <Item name="Directed by" value={show.director} />
              <Item name="Written by" value={show.writer} />
              <Item name="Higlighted actors" value={show.actors} />
            </ul>
          </div>
        </article>
      </main>

      <style jsx>
        {`
          .container {
            padding: 2rem 0.5rem;
          }
          .card {
            border: 1px solid black;
            border-radius: 4px;
            max-width: 900px;
            background: white;
            margin: 0 auto;
          }
          img {
            height: 400px;
            width: 100%;
            object-fit: cover;
          }
          .card-content {
            padding: 1rem;
          }
          h1 {
            margin: 0;
          }

          header {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .show-type {
            color: rgb(70, 70, 70);
            font-size: 0.9rem;
            font-weight: 600;
          }
          .show-details {
            padding: 0;
            margin-bottom: 0;
            display: grid;
            grid-template-columns: 1fr;
          }
          .show-details > :global(li) {
            list-style: none;
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
          }
          .show-details > :global(li:hover) {
            font-weight: bold;
          }

          @media (min-width: 768px) {
            .show-details {
              grid-template-columns: 1fr 1fr;
              column-gap: 1rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default ShowDetailsCard;

const Item: React.FC<{ name: string; value: string }> = ({ name, value }) => (
  <li>
    <span>{name}</span> {value}
  </li>
);
