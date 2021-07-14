import "./app.css";
import "./components/tab/tab_header.css";
import React, { useState } from "react";
import Classnames from "classnames";
import Nav from "./components/navBar/navbar";
import Weather from "./components/weather_card/weather_card";
import useForeCast from "./hooks/useForeCast";
export default function App() {
  const [location, setlocation] = useState("Kochi");
  function locationSet(e) {
    setlocation(e === "" ? "Kochi" : e);
  }

  return (
    <div className="app">
      <Nav location={location} setLocation={locationSet} />
      <Weather location={location} />
      <WeatherToday location={location}/>
    </div>
  );
}

function WeatherDetails({ wind, temp, condition }) {
  return (
    <React.Fragment>
      <div className="weather-details">
        <div className="grid-item">Temperature</div>
        <div className="grid-item">{temp}<span>&#8451;</span></div>
        <div className="grid-item">Condition</div>
        <div className="grid-item">{condition}</div>
        <div className="grid-item">Wind</div>
        <div className="grid-item">{wind} Km/h</div>
      </div>
    </React.Fragment>
  );
}

function WeatherToday(location) {
  const [index, setindex] = useState(0);
  function indexSet(i) {
    setindex(i);
  }
  const { loading, error, data } = useForeCast(location);
  if (loading) return <div className="loading">Loading</div>;
  if (error) return <div className="Error">Error</div>;
  return (
    <dic className="flex">
      <div className="box">
        {data.map((e, idx) => {
          return (
            <div
              className={Classnames({ time: true, selected: idx === index })}
              key={idx}
              onClick={() => indexSet(idx)}
            >
              {e.time.substr(e.time.length - 5, e.time.length)}
            </div>
          );
        })}
      </div>
      <WeatherDetails
        wind={data[index].wind_kph}
        temp={data[index].temp_c}
        condition={data[index].condition.text}
      />
    </dic>
  );
}
