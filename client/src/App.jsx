import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SongPage from "./pages/SongPage";
import ArtistPage from "./pages/ArtistPage/ArtistPage";
import NotFoundPage from "./pages/NotFoundPage";
import TranslatingPage from "./pages/TranslatingPage";
import SearchResultsPage from "./pages/SearchResults/SearchResults";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Login from "./pages/Login/Login";
import CoverPage from "./pages/CoverPage/CoverPage";
import SecureRoute from "./components/SecureRoute.jsx";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage";
import PlaylistSongPage from "./pages/PlaylistSongPage/PlaylistSongPage.jsx";
import YouTubePlayer from "./components/YouTubePlayer/YouTubePlayer.jsx";

// Check environment variable and apply secureRoute conditionally
const conditionalRoute = (Component) => {
  // Check if the environment variable is set to "Phone"
  if (import.meta.env.VITE_APP_DEVICE_TYPE === "Phone") {
    // Return the component directly without the secureRoute
    return <Component />;
  } else {
    // Use the secureRoute
    return (
      <SecureRoute>
        <Component />
      </SecureRoute>
    );
  }
};

const Router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: conditionalRoute(Home),
  },
  {
    path: "/song/:id",
    element: conditionalRoute(SongPage),
  },
  {
    path: "/Artist/:name",
    element: conditionalRoute(ArtistPage),
  },
  {
    path: "/translating",
    element: conditionalRoute(TranslatingPage),
  },
  {
    path: "/not-found",
    element: conditionalRoute(NotFoundPage),
  },
  {
    path: "/results",
    element: conditionalRoute(SearchResultsPage),
  },
  {
    path: "/cover/:id",
    element: conditionalRoute(CoverPage),
  },
  {
    path: "/*",
    element: conditionalRoute(NotFoundPage),
  },
  {
    path: "/playlist",
    element: conditionalRoute(PlaylistPage),
  },
  {
    path: "/playlistSongPage",
    element: conditionalRoute(PlaylistSongPage),
  },
]);

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <YouTubePlayer />
        <RouterProvider router={Router} />
      </div>
    </I18nextProvider>
  );
}

export default App;
