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

const secureRoute = (Component) => (
  <SecureRoute>
    <Component />
  </SecureRoute>
);

const Router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: secureRoute(Home),
  },
  {
    path: "/song",
    element: secureRoute(SongPage),
  },
  {
    path: "/Artist",
    element: secureRoute(ArtistPage),
  },
  {
    path: "/translating",
    element: secureRoute(TranslatingPage),
  },
  {
    path: "/not-found",
    element: secureRoute(NotFoundPage),
  },
  {
    path: "/results",
    element: secureRoute(SearchResultsPage),
  },
  {
    path: "/cover",
    element: secureRoute(CoverPage),
  },
  {
    path: "/*",
    element: secureRoute(NotFoundPage),
  },
]);

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <RouterProvider router={Router} />
      </div>
    </I18nextProvider>
  );
}

export default App;
