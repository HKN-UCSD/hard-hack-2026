import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import PastProjects from "./PastProjects";
import ArduinoUnoQ from "./arduinoq";
import Navbar from "./navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/past-projects" element={<PastProjects />} />
        <Route path="/arduinoq" element={<ArduinoUnoQ />} />
      </Routes>
    </div>
  );
}

export default App;
