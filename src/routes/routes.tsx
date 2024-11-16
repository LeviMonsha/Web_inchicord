// src/routes/routes.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Auth from '../pages/AuthPage';
import Home from "../pages/HomePage";

const WSRoutes: React.FC = () => (
  <Router>
    <Routes>
      {/* <Route path="/login">
                <Auth mode="login" />
            </Route>
            <Route path="/register">
                <Auth mode="register" />
            </Route> */}
      <Route path="/">
        <Home />
      </Route>
    </Routes>
  </Router>
);

export default WSRoutes;
