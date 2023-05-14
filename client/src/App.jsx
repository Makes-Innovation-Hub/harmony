import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import SongPage from "./Pages/SongPage";
import ArtistPage from "./pages/ArtistPage";
import { useState } from "react";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/song",
    element: <SongPage/>,
  },
  {
    path: "/Artist",
    element: <ArtistPage />,
  },
]);
function App() {
  const [showError, setShowError] = useState(false);
  if (showError) {
    setShowError(true);
    throw new Error("Oops! Something went wrong");
  }
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}
export default App;
