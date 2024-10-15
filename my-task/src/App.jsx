import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Section_One from "./Components/First Section/Section_One";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Section_One />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
