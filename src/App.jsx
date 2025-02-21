// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Router from "./ElRouter/Router";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router/> {/* ✅ Yeh pura routing ka kaam karegak */}
    </BrowserRouter>
  );
};

export default App;
