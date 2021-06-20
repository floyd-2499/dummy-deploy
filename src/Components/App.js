import React from "react";
import "./App.css";
import Stars from "./Background/Stars";
import CombinedDTW from "./CombinedDTW";
import CombineSpeech from "./CombineSpeech";

const App = () => {
  return (
    <div className="c">
      <CombinedDTW className="cdtw" />
      <Stars className="star" />
      <CombineSpeech className="cs" />
    </div>
  );
};

export default App;
