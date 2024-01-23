import { QueryClientProvider } from "@tanstack/react-query";
import { render as rtlRender } from "@testing-library/react";
import { renderHook as rtlRenderHook } from "@testing-library/react-hooks/dom/pure";
import { createMemoryHistory } from "history";
import { JSXElementConstructor, ReactElement } from "react";
import { Router } from "react-router-dom";

import { queryClient } from "@/services/providers";

export const appHistory = createMemoryHistory();
type ReactChildren = ReactElement<unknown, string | JSXElementConstructor<unknown>>;

/**
 * custom renderHook override with wrappers
 */
export const renderHook = <TProp extends { children: ReactChildren }, TResult>(
  hook: (props: TProp) => TResult,
  history = appHistory,
) => {
  const wrapper = ({ children }: { children: ReactChildren }) => (
    <Router navigator={history} location={history.location}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Router>
  );
  return rtlRenderHook<TProp, TResult>(hook, { wrapper });
};

/**
 * custom render override with wrappers
 */
export const renderWithProviders = (ui: ReactChildren, history = appHistory) => {
  const wrapper = ({ children }: { children: ReactChildren }) => (
    <Router navigator={history} location={history.location}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Router>
  );

  return rtlRender(ui, { wrapper });
};
