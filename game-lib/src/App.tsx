import Header from "./components/Header";
import Results from "./components/Results";
import SideBar from "./components/SideBar";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentGenre, setCurrentGenre] = useState("");

  // function updateGenre(event: Event) {}

  return (
    <>
      {/* Header */}
      <Header />

      <div className="content-wrapper">
        {/* Side */}
        <SideBar onUpdateGenre={setCurrentGenre} />

        {/* Content */}
        <Results />
      </div>
    </>
  );
}

export default App;
