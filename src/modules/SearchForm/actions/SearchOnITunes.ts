"use server";

import { SearchResult } from "@/types/SearchResult";

export async function searchOnITunes(
  searchString: string
): Promise<SearchResult[]> {
  try {
    const searchUrl = new URL("https://itunes.apple.com/search");
    searchUrl.searchParams.append("term", searchString);
    const results = await fetch(searchUrl.toString());
    const resultsJson = await results.json();
    const returnObject: SearchResult[] = resultsJson.results.map(
      (res: SearchResult) => {
        return {
          wrapperType: res.wrapperType,
          artistName: res.artistName,
          trackName: res.trackName,
          artworkUrl60: res?.artworkUrl60 ?? "-",
        };
      }
    );
    return returnObject;
  } catch {
    return [
      {
        wrapperType: "Book",
        trackName: "Book #123",
        artistName: "Bob Ross",
        artworkUrl60: "-",
      },
    ];
  }
}
