import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
    const { mobile, onClick } = props;
    return (
        <div className={mobile ? "nav-mobile" : "nav"}>
            <NavLink
                className={
                    mobile ? "nav-link-mobile " : "nav-link px-4 py-2 mx-4"
                }
                to="/home"
                onClick={onClick}
            >
                Home
            </NavLink>
            <NavLink
                className={
                    mobile ? "nav-link-mobile " : "nav-link px-4 py-2 mx-4"
                }
                to="/about"
                onClick={onClick}
            >
                About
            </NavLink>
            <NavLink
                className={
                    mobile ? "nav-link-mobile " : "nav-link px-4 py-2 mx-4"
                }
                to="/services"
                onClick={onClick}
            >
                Services
            </NavLink>
            <NavLink
                className={
                    mobile ? "nav-link-mobile " : "nav-link px-4 py-2 mx-4"
                }
                to="/pricing"
                onClick={onClick}
            >
                Pricing
            </NavLink>
        </div>
    );
};

export default NavBar;
