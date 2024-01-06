import React from "react";
import "./index.css";
import Onboarding from "./screens/Onboarding";
import { Route, Routes } from "react-router-dom";
import Game from "./screens/Game";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
};

export default App;
