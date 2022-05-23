import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { UserWrapper } from "../context/UserContext";
import BookSpeaker from "../pages/BookSpeaker";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Speakers from "../pages/Speakers";
import SpeakersDetail from "../pages/SpeakersDetail";
import AuthRoute from "./AuthRoute";
import ProtectedRoute from "./ProtectedRoute";

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
          <Route element={<AuthRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/speakers/:id/:name" element={<SpeakersDetail />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/speakers/:id/:name/book" element={<BookSpeaker />} />
          </Route>
        </Routes>
      </UserWrapper>
    </BrowserRouter>
  );
};

export default Routers;
