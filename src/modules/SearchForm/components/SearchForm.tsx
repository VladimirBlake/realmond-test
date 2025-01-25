import ApplicationHeading from "@/components/ApplicationHeading";
import SearchInput from "@/modules/SearchForm/components/SearchInput";

export default function SearchForm() {
  return (
    <form>
      <ApplicationHeading />
      <SearchInput className="mt-4" />
    </form>
  );
}
