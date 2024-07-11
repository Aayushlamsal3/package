import React from "react";
import BluebookService from "./BluebookService";
import "./index.css";
import Second from "./Second";
import First from "./First";

const Box = () => {
  return (
    <div className="Big-Box1">
      <First />
      <Second />
      <BluebookService />
    </div>
  );
};

export default Box;
