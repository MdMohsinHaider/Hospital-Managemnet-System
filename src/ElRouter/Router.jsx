// src/ElRouter/Router.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/doctors" element={<Doctors />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/contact" element={<Contact />} /> */}
      <Route path="/Login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  );
};

export default Router;
