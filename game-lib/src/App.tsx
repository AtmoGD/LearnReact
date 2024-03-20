import Header from "./components/Header";
import Results from "./components/Results";
import SideBar from "./components/SideBar";
import "./App.css";

function App() {
  return (
    <>
      {/* Header */}
      <Header />

      <div>
        {/* Side */}
        <SideBar />

        {/* Content */}
        <Results />
      </div>
    </>
  );
}

export default App;
