import { SearchResult } from "@/types/SearchResult";
import {
  Avatar,
  Chip,
  ListItem,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from "@mui/joy";

export default function ResultsListItem({
  searchResult,
}: {
  searchResult: SearchResult;
}) {
  return (
    <ListItem sx={{ padding: "10px" }} variant="outlined">
      <ListItemDecorator>
        {searchResult.artworkUrl60 === "-" ? (
          <Avatar>-</Avatar>
        ) : (
          <Avatar src={searchResult.artworkUrl60}></Avatar>
        )}
      </ListItemDecorator>
      <ListItemContent sx={{ marginLeft: "8px" }}>
        <div className="flex items-center gap-3">
          <Chip color="primary">{searchResult.wrapperType}</Chip>
          <Typography level="title-sm">{searchResult.artistName}</Typography>
        </div>
        <div className="mt-1">
          <Typography level="title-lg">
            {searchResult.trackName
              ? searchResult.trackName
              : searchResult.collectionName}
          </Typography>
        </div>
      </ListItemContent>
    </ListItem>
  );
}
