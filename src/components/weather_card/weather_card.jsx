import "./weather_card.css";
import React from "react";
import useGetCurrent from "../../hooks/useGetCurrent";

export default  function Weather({ location }) {
  const { loading, error, data } = useGetCurrent(location);
  if (loading) return <div className="weather">loading...</div>;
  if (error) return <div className="weather">Error</div>;
  return (
    <div className="weather">
      <div className="container">
        <p className="temperature">
          {data?.current?.temp_c}
          <span>&#8451;</span>
        </p>
        <p className="status">{data?.current.condition.text}</p>
        <p className="status">{data?.location?.name+", "+data?.location?.country}</p>
        <div className="subtitle">{data?.current?.wind_kph}km/h</div>
      </div>
    </div>
  );
}
