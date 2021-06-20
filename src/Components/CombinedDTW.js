import React from 'react';
import Time from './Time  Date and Weather/Time';
import FetchWeather from './Weather/FetchWeather';
import "./App.css";



const CombinedDTW = () => {
    return (
        <div className="dtw">
            <Time className="t"/>
            <FetchWeather className="f" />
        </div>
    )
}

export default CombinedDTW;
 