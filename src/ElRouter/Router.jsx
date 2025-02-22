// src/ElRouter/Router.jsx
import React from "react";
import { Routes, Route, createBrowserRouter } from "react-router-dom";
import Home from "../pages/homepage/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Layout from "../pages/layout/Layout";
import Doctors from '../pages/doctor/Doctors'
import Patients from '../pages/patients/Patients'
import Appointment from '../pages/appointments/Appointment'
import Contact from "../pages/contact/Contact";


export  let myRoutes=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"/doctors",
        element:<Doctors/>,
      },
      {
        path:"/patients",
        element:<Patients />,
      },
      {
        path:"/appointments",
        element:<Appointment />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/login",
        element:<Login/>,
      },
      {
        path:"/register",
        element:<Register />,
      },
    ]
  }
])

