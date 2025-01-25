"use client";
import { Button, Input } from "@mui/joy";
import { Dispatch, SetStateAction } from "react";

export default function SearchInput({
  className,
  searchValue,
  setSearchValue,
}: {
  className?: string;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}) {
  return (
    <Input
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className={className}
      endDecorator={<Button type="submit">Search</Button>}
    />
  );
}
