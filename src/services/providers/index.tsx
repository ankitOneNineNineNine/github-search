import { QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { StrictMode, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

import { toastFail } from "../api";

/**
 * Initializing Query Client
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      staleTime: 30 * 1000,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof AxiosError) {
        toastFail(error?.response?.data?.message || "Something Went Wrong");
      }
    },
  }),
});

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Suspense fallback={<p>Loading ...</p>}>
          <Toaster position="bottom-right" />
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </Suspense>
      </BrowserRouter>
    </StrictMode>
  );
};
