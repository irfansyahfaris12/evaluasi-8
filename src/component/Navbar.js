import React from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css"

function Navbar(){
    return(
        <div className="navbar" >
            <nav>
                <ul className ="ul">
                    <li className="li">
                        <Link className="a" to="/">Home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;