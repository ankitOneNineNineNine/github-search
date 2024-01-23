import { Route, Routes } from "react-router-dom";

import DetailsPage from "./pages/details/details";
import SearchPage from "./pages/search/search";
import { Provider } from "./services/providers";

export default function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Provider>
  );
}
