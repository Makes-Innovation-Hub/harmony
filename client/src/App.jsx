import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SongPage from "./pages/SongPage";
import ArtistPage from "./pages/ArtistPage/ArtistPage";
import NotFoundPage from "./pages/NotFoundPage";
import TranslatingPage from "./pages/TranslatingPage";
import SearchResults from "./pages/SearchResults/SearchResults";
import { useState } from "react";
import "./App.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
// import dummydata from "./pages/ArtistPage/dummyData_ArtistPage.js";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/song",
    element: <SongPage />,
  },
  {
    path: "/Artist",
    element: <ArtistPage />,
  },
  {
    path: "/translating",
    element: <TranslatingPage />,
  },
  {
    path: "/not-found",
    element: <NotFoundPage />,
  },
  {
    path: "/results",
    element: <SearchResults />,
  },
]);

function App() {
  const [showError, setShowError] = useState(false);
  if (showError) {
    setShowError(true);
    throw new Error("Oops! Something went wrong");
  }
  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <RouterProvider router={Router} />
      </div>
    </I18nextProvider>
  );
}
export default App;
