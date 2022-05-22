import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { UserWrapper } from "../context/UserContext";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Speakers from "../pages/Speakers";
import SpeakersDetail from "../pages/SpeakersDetail";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Routers = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <UserWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/speakers/:id/:name" element={<SpeakersDetail />} />
        </Routes>
      </UserWrapper>
    </BrowserRouter>
  );
};

export default Routers;
