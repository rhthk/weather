import React from "react";
import "./navbar.css";
import { ReactComponent as SettingsIcon } from "../../icons/settings.svg";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

export default function Navbar({title}) {
  return (
    <nav className="nav">
      <h1>logo</h1>
      <p className="location">{title}</p>
      <Search />
    </nav>
  );
}
function Search() {
  return (
    <div className="search">
      <SearchIcon className="icon" />
      <input type="text" name="search" />
      <SettingsIcon className="icon" />
    </div>
  );
}
