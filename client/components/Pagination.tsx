import { useRouter } from "next/router";
import React from "react";
import { ShowsByTitleResponse } from "utils/graphqlTypes";

const Pagination: React.FC<
  Pick<ShowsByTitleResponse, "totalResults" | "page">
> = ({ totalResults, page }) => {
  const isLastPage = page == Math.ceil(totalResults / 10);

  const router = useRouter();

  function updatePageQueryParam(page: number) {
    router.push(
      {
        pathname: "/",
        query: {
          title: router.query.title,
          type: router.query.type,
          page: page.toString(),
        },
      },
      undefined,
      { shallow: true }
    );
  }

  function handleNextPage(event: React.SyntheticEvent) {
    event.preventDefault();

    updatePageQueryParam(page + 1);
  }

  function handlePreviousPage(event: React.SyntheticEvent) {
    event.preventDefault();

    updatePageQueryParam(page - 1);
  }

  return (
    <div>
      <span>
        {totalResults} show{totalResults > 1 ? "s" : ""} found.
      </span>

      <span className="pagination">
        {page > 1 && (
          <a href="#" onClick={handlePreviousPage} aria-label="previous page">
            &lt;{" "}
          </a>
        )}
        <span>Page {page}</span>
        {!isLastPage && (
          <a href="#" onClick={handleNextPage} aria-label="next page">
            {" "}
            &gt;{" "}
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
