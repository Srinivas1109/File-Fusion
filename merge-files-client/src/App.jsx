import React, { useState } from "react";
import "./styles/App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  const fileTypes = ["pdf", "docx", "ppt", "pptx", "txt", "csv"];
  const [fileType, setFileType] = useState(fileTypes[0]);

  return (
    <div className="main">
      <Router>
        <Navbar setFileType={setFileType} fileTypes={fileTypes} />
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Home fileType={fileType}/>} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
