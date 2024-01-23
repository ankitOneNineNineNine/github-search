import { SearchView } from "./search-view";
import { useSearch } from "./use-search";

export default function SearchPage() {
  const logic = useSearch();
  return <SearchView {...logic} />;
}
