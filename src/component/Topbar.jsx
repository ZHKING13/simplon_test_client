import React, { useState } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";


function Topbar() {
    const [ShowNave, setShowNave] = useState(true);

    return (
        <header className="header">
            <div
                id="menu-btn"
                onClick={() => setShowNave(!ShowNave)}
                className="fas fa-bars"
            ></div>

            <p className="logo">
                <span>Simplon</span> <br /> Event
            </p>

            <nav className="navbar" id={ShowNave ? "hiden" : "active"}>
                <Link className="btn" to="/ajouter">
                    Ajouter
                </Link>
                <Link className="btn" to="/">
                    Liste
                </Link>
            </nav>
        </header>
    );
}

export default Topbar;
