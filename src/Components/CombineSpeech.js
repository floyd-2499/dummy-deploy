import React from "react";
import "./App.css";
import Speech from "./Speech/Speech";
import Recognition from "./Recognition/Recognition";


const CombineSpeech = () => {
  return (
    <div className="speech">
      <Speech />
      <Recognition />
    </div>
  );
};

export default CombineSpeech;
