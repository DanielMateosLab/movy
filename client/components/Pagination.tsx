import React from "react";
import { showsByTitleArgs } from "utils/apolloClient";
import { ShowsByTitleResponse } from "utils/graphqlTypes";

const Pagination: React.FC<
  Pick<ShowsByTitleResponse, "totalResults" | "page">
> = ({ totalResults, page }) => {
  const isLastPage = page == Math.ceil(totalResults / 10);

  function handleNextPage(event: React.SyntheticEvent) {
    event.preventDefault();

    showsByTitleArgs({
      ...showsByTitleArgs(),
      page: page + 1,
    });
  }

  function handlePreviousPage(event: React.SyntheticEvent) {
    event.preventDefault();

    showsByTitleArgs({
      ...showsByTitleArgs(),
      page: page - 1,
    });
  }

  return (
    <div>
      <span>{totalResults} shows found.</span>

      <span className="pagination">
        {page > 1 && (
          <a href="#" onClick={handlePreviousPage}>
            &lt;{" "}
          </a>
        )}
        <span>Page {page}</span>
        {!isLastPage && (
          <a href="#" onClick={handleNextPage}>
            {" "}
            &gt;
          </a>
        )}
      </span>

      <style jsx>
        {`
          .pagination {
            margin-left: 0.5rem;
          }
          a {
            color: blue;
          }
        `}
      </style>
    </div>
  );
};

export default Pagination;
