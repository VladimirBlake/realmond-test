import { Button, Input } from "@mui/joy";

export default function SearchInput({ className }: { className?: string }) {
  return <Input className={className} endDecorator={<Button>Search</Button>} />;
}
