import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { urls } from "../urls";
import { FetchRepoResponse, Repo, SearchRepoParams } from ".";

const commonHeaders = {
  "X-GitHub-Api-Version": "2022-11-28",
  Accept: "application/vnd.github.v3+json",
};

const searchRepo = (params: SearchRepoParams) => () => {
  return axios.get<FetchRepoResponse>(urls.repos.search, {
    params,
    headers: commonHeaders,
  });
};

const getRepoById = (id: string) => () => {
  return axios.get<Repo>(urls.repos.fetchById.replace("{id}", id), {
    headers: commonHeaders,
  });
};

/**
 * Use Query to Fetch Repositories
 * @param {SearchRepoParams} params
 * @export useSearchRepo
 * @returns UseQueryResult
 */
export const useSearchRepo = (params: SearchRepoParams) => {
  return useQuery({
    queryKey: [urls.repos.search, JSON.stringify(params)],
    queryFn: searchRepo(params),
    enabled: !!params.q && (!!params.sort || !!params.page || !!params.per_page),
  });
};

/**
 * Use Query to Fetch Repo By Id
 * @param {string} id
 * @export useGetRepoById
 * @returns UseQueryResult
 */
export const useGetRepoById = (id: string) => {
  return useQuery({
    queryKey: [urls.repos.fetchById, id],
    queryFn: getRepoById(id),
    enabled: !!id,
    select: ({ data }) => data,
  });
};
