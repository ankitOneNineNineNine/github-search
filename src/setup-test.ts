import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(async () => {
  cleanup();
});

vi.mock("./services/api", async () => await vi.importActual("./services/api"));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: vi.fn(),
  };
});
