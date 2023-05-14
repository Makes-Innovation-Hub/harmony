import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import SongPage from "./Pages/SongPage";
import ArtistPage from "./pages/ArtistPage";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Components/Header";
import Lyrics from "./components/Lyrics";
import "./App.css";


function App() {
  return (
    <>
     <Header/>
     <Lyrics/>
    </>
=======
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
