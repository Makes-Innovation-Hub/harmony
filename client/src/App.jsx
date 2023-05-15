import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Components/Header";
import Search from "./components/Searchbar";
import Lyrics from "./components/Lyrics";
import "./App.css";

function App() {
  return (
    <>
     <Header/>
     <Search/>
     {/* <Lyrics/> */}
    </>
  );
}

export default App;
