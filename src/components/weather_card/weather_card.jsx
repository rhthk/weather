import "./weather_card.css";
import React from "react";
import { ReactComponent as Right } from "../../icons/Chevron_right.svg";
import { ReactComponent as Left } from "../../icons/Chevron_left.svg";


export default function Weather() {
  return (
    <div className="weather">
      <div className="center">
        <Left style={{width:30}}/>
        <div className="container">
          <p className="temperature">25</p>
          <p className="status">Light</p>
          <div className="subtitle">AOI</div>
        </div>
        <Right style={{width:30}}/>
      </div>
    </div>
  );
}
