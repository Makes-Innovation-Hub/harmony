import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SongPage from "./pages/SongPage";
import ArtistPage from "./pages/ArtistPage/ArtistPage";
import NotFoundPage from "./pages/NotFoundPage";
import TranslatingPage from "./pages/TranslatingPage";
import SearchResults from "./pages/SearchResults/SearchResults";
import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import hebrewImg from "./assets/songDetails/ע.png";
import arabicImg from "./assets/songDetails/ع.png";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

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
    element: (
      <SearchResults
        songs={[
          {
            id: 36,
            img: "src/assets/Flag.png",
            titles: ["song1", "שיר אחד"],
            languages: { target: arabicImg, origin: hebrewImg },
          },
          {
            id: 37,
            img: "src/assets/Flag.png",
            titles: ["song1", "שיר אחד"],
            languages: { target: arabicImg, origin: hebrewImg },
          },
          {
            id: 38,
            img: "src/assets/Flag.png",
            titles: ["song1", "שיר אחד"],
            languages: { target: arabicImg, origin: hebrewImg },
          },
          {
            id: 41,
            img: "src/assets/Flag.png",
            titles: ["song1", "שיר שני"],
            languages: { target: arabicImg, origin: hebrewImg },
          },
        ]}
        artists={[
          {
            id: 11,
            img: "src/assets/Flag.png",
            titles: ["art1", "אומן1"],
          },
          {
            id: 21,
            img: "src/assets/Flag.png",
            titles: ["art2", "אומן2"],
          },
          {
            id: 22,
            img: "src/assets/Flag.png",
            titles: ["art2", "אומן2"],
          },
          {
            id: 23,
            img: "src/assets/Flag.png",
            titles: ["art2", "אומן2"],
          },
          {
            id: 24,
            img: "src/assets/Flag.png",
            titles: ["art2", "אומן2"],
          },
        ]}
      />
    ),
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
