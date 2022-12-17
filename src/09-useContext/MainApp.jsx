import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, LoginPage, NavBar } from ".";

export const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      <hr />
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

        {/* <Route path="/*" element={<LoginPage />} /> */}
        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </>
  );
};
