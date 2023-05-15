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
  );
}

export default App;
