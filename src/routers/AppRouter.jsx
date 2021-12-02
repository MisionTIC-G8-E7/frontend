import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DashboardRouter from './DashboardRouter'
import LoginScreen from "../components/login/LoginScreen"
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <LoginScreen /> } />
      </Routes>
    </BrowserRouter>
  )
}


export default AppRouter
