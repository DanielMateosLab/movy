import { ShowsByTitleSummaryQuery } from "utils/graphqlTypes";
import Pagination from "./Pagination";

interface Props {
  loading: boolean;
  called: boolean;
  data?: ShowsByTitleSummaryQuery;
}
const SearchInfo: React.FC<Props> = ({ called, data, loading }) => {
  if (!called) return null;

  const noShowsFound = !data || data.showsByTitle.totalResults == 0;

  if (loading) return <span>Loading...</span>;

  if (noShowsFound) {
    return (
      <span>Could not found any show! Try with other search parameters.</span>
    );
  }

  const { totalResults, page } = data.showsByTitle;

  return <Pagination totalResults={totalResults} page={page} />;
};

export default SearchInfo;
