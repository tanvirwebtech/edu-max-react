import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
    return (
        <div className="header ">
            <div className="container mx-16">
                <nav className="flex items-center justify-between">
                    <div className="logo">
                        <NavLink to="/home">
                            <img src={logo} alt="" />
                        </NavLink>
                    </div>
                    <div className="nav-bar">
                        <NavLink className="nav-link px-4 py-2 mx-4" to="/home">
                            Home
                        </NavLink>
                        <NavLink
                            className="nav-link px-4 py-2 mx-4"
                            to="/about"
                        >
                            About
                        </NavLink>
                        <NavLink
                            className="nav-link px-4 py-2 mx-4"
                            to="/services"
                        >
                            Services
                        </NavLink>
                        <NavLink
                            className="nav-link px-4 py-2 mx-4"
                            to="/pricing"
                        >
                            Pricing
                        </NavLink>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
