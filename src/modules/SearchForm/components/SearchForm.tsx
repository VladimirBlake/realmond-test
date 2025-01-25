"use client";
import ApplicationHeading from "@/components/ApplicationHeading";
import SearchInput from "@/modules/SearchForm/components/SearchInput";
import { SearchResult } from "@/types/SearchResult";
import { Dispatch, SetStateAction, useState } from "react";
import { handleSearchSubmit } from "../helpers/handleSearchSubmit";

export default function SearchForm({
  setSearchResults,
}: {
  setSearchResults: Dispatch<SetStateAction<SearchResult[]>>;
}) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <form
      onSubmit={(e) => handleSearchSubmit(e, searchValue, setSearchResults)}
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
