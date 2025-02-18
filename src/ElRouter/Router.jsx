// src/ElRouter/Router.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/doctors" element={<Doctors />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};

export default Router;
