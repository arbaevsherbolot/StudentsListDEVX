import React from "react";
import { Wrapper } from "./components/wrapper/Wrapper";
import "./App.scss";

export const App = () => {
  return (
    <>
      <Wrapper />

      <div className="modal_window">
        Site is not available for mobile devices
      </div>
    </>
  );
};
