import React from "react";
import "./navbar.css";
import { ReactComponent as SettingsIcon } from "../../icons/settings.svg";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

export default function NavBar({location, setLocation}) {
    return (
    <nav className="nav">
      <h1>logo</h1>
      <p className="location">{location}</p>
      <Search onchange={setLocation} />
    </nav>
  );
}

function Search({ onchange }) {
  return (
    <div className="search">
      <SearchIcon className="icon" />
      <input
        type="text"
        name="search"
        onChange={(e) => onchange(e.target.value)}
      />
      <SettingsIcon className="icon" />
    </div>
  );
}
