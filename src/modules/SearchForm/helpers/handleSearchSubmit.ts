import { SearchResult } from "@/types/SearchResult";
import { searchOnITunes } from "../actions/SearchOnITunes";
import { Dispatch, SetStateAction } from "react";

export const handleSearchSubmit = async (
  event: React.FormEvent<HTMLFormElement>,
  searchString: string,
  setSearchResults: Dispatch<SetStateAction<SearchResult[]>>
) => {
  event.preventDefault();

  try {
    const results = await searchOnITunes(searchString);
    setSearchResults(results);
  } catch (error) {
    console.error("Error searching on iTunes:", error);
  }
};
