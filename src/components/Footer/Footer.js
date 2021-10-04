import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";

const Footer = () => {
    return (
        <div className="footer bg-edu-soft-blue">
            <div className="container mx-auto">
                <div className="grid grid-cols-7 gap-4">
                    <div className="site-info flex items-center justify-center col-span-2">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="importans-links col-start-3 col-span-5">
                        <h3 className="font-medium">Important Links</h3>
                        <p>
                            <NavLink
                                className="nav-link footer-nav px-4 py-2 mx-4"
                                to="/home"
                            >
                                Home
                            </NavLink>
                        </p>
                        <p>
                            <NavLink
                                className="nav-link footer-nav px-4 py-2 mx-4"
                                to="/about"
                            >
                                About
                            </NavLink>
                        </p>
                        <p>
                            <NavLink
                                className="nav-link footer-nav px-4 py-2 mx-4"
                                to="/service"
                            >
                                Services
                            </NavLink>
                        </p>
                        <p>
                            {" "}
                            <NavLink
                                className="nav-link footer-nav px-4 py-2 mx-4"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </p>
                    </div>
                    <div className="social"></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
