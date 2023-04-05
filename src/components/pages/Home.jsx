import React from "react";
import "./Pages.scss";
import pic from "../../assets/Market-launch-pana.png"

export const Home = () => {
  return (
    <>
      <div className="page_wrapper">
        <h1 className="home_title">Total number of all students:</h1>
        <span className="number"></span>
        <img src={pic} alt="Img" className="image_home" />
      </div>
    </>
  );
};
