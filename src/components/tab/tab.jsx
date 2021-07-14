import React, { useState } from "react";
import TabHeader from "./tab_header";

export default function Tab() {
  const [selectedIndex, setIndex] = useState(0);
  function setInd(i) {
    setIndex(i);
  }
  return (
    <React.Fragment>
      <div>
        <TabHeader
          headers={["Now", "Today"]}
          selectedIndex={selectedIndex}
          setInd={setInd}
        />
      </div>
      <div className="tab-body">
        <div className="weather-now">
          <div>{Date.now()}</div>
          <div>Icon</div>
        </div>
        <WeatherDetails wind="13Km/h" aqi="3" feel="Humid" />
      </div>
    </React.Fragment>
  );
}

function WeatherDetails({ wind, feel, aqi }) {
  return (
    <React.Fragment>
      <div className="weather-details">
        <div className="grid-item">Real feel</div>
        <div className="grid-item">{feel}</div>
        <div className="grid-item">Air quality</div>
        <div className="grid-item">{aqi}</div>
        <div className="grid-item">Wind</div>
        <div className="grid-item">{wind}</div>
      </div>
    </React.Fragment>
  );
}
