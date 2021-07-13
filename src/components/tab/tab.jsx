import TabHeader from "./tab_header";

import React, { useState } from "react";

export default function Tab() {
  const [selectedIndex, setIndex] = useState(0);
  function setInd(i) {
    setIndex(i);
  }
  return (
    <React.Fragment>
      <div>
        <TabHeader
          headers={["Now", "Today", "Week", "Month"]}
          selectedIndex={selectedIndex}
          setInd={setInd}
        />
      </div>
      <div className="tab-body">
        <div className="weather-details">
          <div className="grid-item">Real feel</div>
          <div className="grid-item">2</div>
          <div className="grid-item">Air quality</div>
          <div className="grid-item">4</div>
          <div className="grid-item">Wind</div>
          <div className="grid-item">6</div>
        </div>
      </div>
    </React.Fragment>
  );
}
