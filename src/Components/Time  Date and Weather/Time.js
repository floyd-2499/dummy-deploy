import React, { Component } from "react";
import "./Time.css";

class Time extends Component {
  constructor() {
    super();
    this.state = { currentTime: new Date() };
  }
  cTime() {
    this.setState({
      currentTime: new Date(),
    });
  }
  componentWillMount() {
    setInterval(() => this.cTime(), 1000);
  }

  render() {
    const h = new Array([]);
    h[0] = "12";
    h[1] = "01";
    h[2] = "02";
    h[3] = "03";
    h[4] = "04";
    h[5] = "05";
    h[6] = "06";
    h[7] = "07";
    h[8] = "08";
    h[9] = "09";
    h[10] = "10";
    h[11] = "11";
    h[12] = "12";
    h[13] = "01"; // Success...... yooo
    h[14] = "02";
    h[15] = "03";
    h[16] = "04";
    h[17] = "05";
    h[18] = "06";
    h[19] = "07";
    h[20] = "08";
    h[21] = "09";
    h[22] = "10";
    h[23] = "11";
    h[24] = "12";
    let hrs = h[this.state.currentTime.getHours()];
    let min = this.state.currentTime.getMinutes();
    let sec = this.state.currentTime.getSeconds();
    let timeDefine = this.state.currentTime.getHours();
    if (timeDefine <= 12) {
      timeDefine = "AM";
    } else {
      timeDefine = "PM";
    }
    let date = this.state.currentTime.getDate();
    let year = this.state.currentTime.getFullYear();
    const m = new Array();
    m[0] = "January";
    m[1] = "February";
    m[2] = "March";
    m[3] = "April";
    m[4] = "May";
    m[5] = "June";
    m[6] = "July";
    m[7] = "August";
    m[8] = "September";
    m[9] = "October";
    m[10] = "November";
    m[11] = "December";
    let month = m[this.state.currentTime.getMonth()];
    const d = new Array();
    d[0] = "Sunday";
    d[1] = "Monday"; // but w3 school has some stuff- try - https://www.w3schools.com/jsref/jsref_todatestring.asp
    d[2] = "Tuesday";
    d[3] = "Wednesday";
    d[4] = "Thursday";
    d[5] = "Friday";
    d[6] = "Saturday";
    let day = d[this.state.currentTime.getDay()];
    // console.log(`${hrs}:${min}:${sec}  -  ${timeDefine}`)

    //     let ans = (`${hrs}:${min}:${sec} ${timeDefine}`);

    return (
      <div className={"containerTime"}>
        <br />
        <div className="time">
          {hrs}:{min}:{sec}{" "}
          <span style={{ fontWeight: "100", fontSize: "22px" }}>
            {timeDefine}
          </span>
        </div>
        <br />
        <div className="date">
          {" "}
          {month}{" "}
          <span style={{ fontWeight: "400", fontSize: "24px" }}>{date}</span>{" "}
          {year}
        </div>
        <div className="day">{day}</div>
      </div>
    );
  }
}

export default Time;
