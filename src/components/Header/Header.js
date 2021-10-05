import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

const Header = () => {
    const [navToggle, setNavToggle] = useState(false);

    const handleToggle = () => {
        if (navToggle) {
            setNavToggle(false);
        } else {
            setNavToggle(true);
        }
    };
    return (
        <div className="header ">
            <div className="container md:mx-16 sm:mx-16 mx-auto">
                <nav className="w-full flex items-center justify-between">
                    <div className="logo">
                        <NavLink to="/home">
                            <img src={logo} alt="" className="w-full" />
                        </NavLink>
                    </div>

                    {/* Nav Bar */}
                    <div className="sm:hidden md:block hidden nav-bar">
                        <NavBar></NavBar>
                    </div>

                    <div className="nav-toggler mx-4 lg:hidden md:hidden sm:block block">
                        <button onClick={handleToggle}>
                            {
                                <FontAwesomeIcon
                                    className="text-2xl text-edu-navy"
                                    icon={faBars}
                                />
                            }
                        </button>
                        {!navToggle ? (
                            ""
                        ) : (
                            <NavBar mobile onClick={handleToggle} />
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;
