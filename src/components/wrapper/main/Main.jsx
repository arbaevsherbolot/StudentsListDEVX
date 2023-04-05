import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Students_page } from "../../pages/Students_page";

export const Main = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Students_page />} path="/students" />
      </Routes>
    </>
  );
};
