import { useParams } from "react-router-dom";

import { useGetRepoById } from "../../services/api";
import { UseDetailsFn } from "./details.types";

export const useDetails: UseDetailsFn = () => {
  const { id } = useParams();
  const { data: repoDetails, isLoading } = useGetRepoById(id || "");
  return {
    repoDetails,
    isLoading,
  };
};
