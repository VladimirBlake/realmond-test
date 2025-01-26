import ResultsListItem from "@/modules/SearchResults/components/ResultsListItem";
import { SearchResult } from "@/types/SearchResult";
import { CircularProgress, List, Typography } from "@mui/joy";

export default function SearchResults({
  searchResults,
  haveSearched,
  searchInProgress,
}: {
  searchResults: SearchResult[];
  haveSearched: boolean;
  searchInProgress: boolean;
}) {
  if (searchInProgress) {
    return (
      <div className="mt-3">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="mt-3">
      {searchResults.length > 0 && (
        <List>
          {searchResults.map((result, index) => (
            <ResultsListItem key={index} searchResult={result} />
          ))}
        </List>
      )}
      {haveSearched && searchResults.length === 0 && (
        <Typography level="body-lg">No results found</Typography>
      )}
    </div>
  );
}
