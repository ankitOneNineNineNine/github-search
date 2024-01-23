import { Repo } from "../../services/api";

export type UseDetailsFn = () => {
  repoDetails?: Partial<Repo>;
  isLoading: boolean;
};

export type DetailsViewProps = ReturnType<UseDetailsFn>;
