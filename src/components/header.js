import React from "react";
import "./header.css";
//import "./assets/freecodecamp.svg";

const Header = function(){
    return (
        <div className="header head">
            <p>
                <i className="fa fa-free-code-camp"></i>
                <label>FreeCodeCamp</label>
            </p>
        </div>
        );
}

export default Header;