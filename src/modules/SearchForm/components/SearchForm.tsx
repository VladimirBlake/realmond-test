"use client";
import ApplicationHeading from "@/components/ApplicationHeading";
import SearchInput from "@/modules/SearchForm/components/SearchInput";
import { SearchResult } from "@/types/SearchResult";
import { Dispatch, SetStateAction, useState } from "react";
import { handleSearchSubmit } from "../helpers/handleSearchSubmit";

export default function SearchForm({
  setSearchResults,
  setHaveSearched,
}: {
  setSearchResults: Dispatch<SetStateAction<SearchResult[]>>;
  setHaveSearched: Dispatch<SetStateAction<boolean>>;
}) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <form
      onSubmit={(e) =>
        handleSearchSubmit(e, searchValue, setSearchResults, setHaveSearched)
      }
    >
      <ApplicationHeading />
      <SearchInput
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        className="mt-4"
      />
    </form>
  );
}
