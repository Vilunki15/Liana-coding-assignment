import React from "react";
import "./App.sass";

const Header = () => {
  return (
    <div className="header">
        <div className="header-upper">
            <ul>
                <li><a href="">News</a></li>
                <li><a href="">Intranet</a></li>
                <li>
                    <select>
                        <option value="english" selected disabled hidden>In English</option>
                        <option value="finnish" selected disabled hidden></option>
                        <option value="swedish" selected disabled hidden></option>
                    </select>
                </li>
            </ul>
        </div>
        <div className="header-lower">

        </div>
    </div>
  );
}

export default Header;