import React from "react";
import "./App.sass";
import logo from "./assets/logo.png";

const Header = () => {
  return (
    <div className="header">
        <div className="header-upper">
            <ul>
                <li><a href="/">News</a></li>
                <li><a href="/">Intranet</a></li>
                <li>
                    <select>
                        <option value="english">In English</option>
                        <option value="finnish">Suomeksi</option>
                        <option value="swedish">På Svenska</option>
                    </select>
                </li>
            </ul>
        </div>
        <div className="header-lower">
            <div className="links">
                <ul>
                    <li><a href="/"><img src={logo} alt="liana logo"/></a></li>
                    <li><a href="/">Company</a></li>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </div>
            <div className="search">
                <ul>
                    <li><form><input type="text" placeholder="Search" ></input></form></li>
                    <li><button>Search</button></li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Header;