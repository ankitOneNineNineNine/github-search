import * as routerModule from "react-router-dom";

import { mockRepoDetails } from "@/__mocks__";
import * as repoFetchModule from "@/services/api/repo/repo";
import { renderHook } from "@/utils/test-utils";

import { useDetails } from "./use-details";

const getRepoById = vi.fn().mockImplementation(() => ({
  isLoading: false,
  data: { data: mockRepoDetails },
}));
vi.spyOn(repoFetchModule, "useGetRepoById").mockImplementation(getRepoById);

describe("Given useDetailsFn", () => {
  describe("When called", () => {
    test.each([{ id: "123" }, { id: "234" }])("it calls useGetRepoById query with id in params of url", ({ id }) => {
      vi.spyOn(routerModule, "useParams").mockImplementation(() => ({ id }));
      renderHook(() => useDetails());
      expect(getRepoById).toBeCalledWith(id);
    });
  });
});
