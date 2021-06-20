import React, { useState, useEffect } from "react";
import "./weather.css";

const FetchWeather = () => {
  const [link, setLink] = useState("");
  const [data, setData] = useState([]);
  const [tempr, setTempr] = useState("");
  const [desc, setDesc] = useState("");
  const [c, setC] = useState("");

  function getWeather() {
    let api = "https://api.openweathermap.org/data/2.5/weather";
    let apiKey = "e3fc1b2985fdd183ad5b4b670b8f2e2d";
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      let url =
        api +
        "?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&appid=" +
        apiKey +
        "&units=imperial";
      setLink(url);
    }
  }
  getWeather();
  // console.log(link);

  const fetchUrlData = async () => {
    const response = await fetch(link);
    const newData = await response.json();
    setData(newData);
    setTempr(data.main.temp);
    setDesc(data.weather[0].main);
    setC(data.sys.country);
    // console.log(data);
    // console.log(data.weather[0].main);
  };

  useEffect(() => {
    fetchUrlData();
  }, []);

  return (
    <div className="wcontainer" onClick={() => fetchUrlData()}>
      <div className="sec">
        <div className="desc">{desc}</div>
        <div className="temperature">{tempr}°F</div>
      </div>
      <br />
      <div className="place">
        {data.name} - {c}
      </div>
    </div>
  );
};

export default FetchWeather;
