import ResultsListItem from "@/modules/SearchResults/components/ResultsListItem";
import { SearchResult } from "@/types/SearchResult";
import { List } from "@mui/joy";

export default function SearchResults({
  searchResults,
}: {
  searchResults: SearchResult[];
}) {
  return (
    <div className="mt-3">
      <List>
        {searchResults.map((result, index) => (
          <ResultsListItem key={index} searchResult={result} />
        ))}
      </List>
    </div>
  );
}
