import { DetailsView } from "./details-view";
import { useDetails } from "./use-details";

export default function DetailsPage() {
  const logic = useDetails();
  return <DetailsView {...logic} />;
}
