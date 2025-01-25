import SearchForm from "@/modules/SearchForm/components/SearchForm";
import SearchResults from "@/modules/SearchResults/components/SearchResults";
import { SearchResult } from "@/types/SearchResult";

const exampleResults: SearchResult[] = [
  {
    kind: "Book",
    trackName: "Book #123",
    artistName: "Bob Ross",
  },
];

export default function Home() {
  return (
    <div className="mt-36 px-5">
      <div className="container">
        <SearchForm />
        <SearchResults searchResults={exampleResults} />
      </div>
    </div>
  );
}
