import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav>
    <div className="header">
    <h1>Painting website</h1>
        <div className="headerTable">
            <ul className="headerList">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/addUsers">Add Users</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </div>
    </nav>
  );
}

export default Navbar;