import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import SongPage from "./Pages/SongPage";
import ArtistPage from "./pages/ArtistPage";
// import { useState } from "react";

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
]);

function App() {
   // the comment lie is just to see if the error boundary work 
  // const [showError, setShowError] = useState(false);

  // const handleClick = () => {
  //   setShowError(true);
  // };

  // if (showError) {
  //   throw new Error("Oops! Something went wrong");
  // }

  return (
    <div>
      <RouterProvider router={Router} />
      <div>
        {/* <button onClick={handleClick}>Click me</button> */}
      </div>
    </div>
  );
}

export default App;
