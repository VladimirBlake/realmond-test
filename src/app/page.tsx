"use client";
import SearchForm from "@/modules/SearchForm/components/SearchForm";
import SearchResults from "@/modules/SearchResults/components/SearchResults";
import { SearchResult } from "@/types/SearchResult";
import { useState } from "react";

export default function Home() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [haveSearched, setHaveSearched] = useState(false);
  const [searchInProgress, setSearchInProgress] = useState(false);

  return (
    <div className="mt-36 px-5">
      <div className="container mx-auto">
        <SearchForm
          setSearchInProgress={setSearchInProgress}
          setHaveSearched={setHaveSearched}
          setSearchResults={setSearchResults}
        />
        <SearchResults
          searchInProgress={searchInProgress}
          haveSearched={haveSearched}
          searchResults={searchResults}
        />
      </div>
    </div>
  );
}
