import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
    const facebookIcon = (
        <FontAwesomeIcon
            className="md:text-2xl text-xl text-edu-navy mx-2 md:mx-4 sm:mx-2"
            icon={faFacebook}
        />
    );
    const twitterIcon = (
        <FontAwesomeIcon
            className="md:text-2xl text-xl text-edu-navy mx-2 md:mx-4 sm:mx-2"
            icon={faTwitter}
        />
    );
    const linkedinIcon = (
        <FontAwesomeIcon
            className="md:text-2xl text-xl text-edu-navy mx-2 md:mx-4 sm:mx-2"
            icon={faLinkedin}
        />
    );
    return (
        <div className="footer bg-edu-soft-blue">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-7 gap-4">
                    <div className="site-info flex items-center justify-center col-span-2">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className="importans-links col-start-3 col-span-2">
                        <h3 className="font-medium text-center">
                            Important Links
                        </h3>
                        <p>
                            <NavLink
                                className="nav-link footer-nav px-4 py-2 mx-1"
                                to="/home"
                            >
                                Home
                            </NavLink>
                        </p>
                        <p>
                            <NavLink
                                className="nav-link footer-nav px-4 py-2 mx-1"
                                to="/about"
                            >
                                About
                            </NavLink>
                        </p>
                        <p>
                            <NavLink
                                className="nav-link footer-nav px-4 py-2 mx-1"
                                to="/service"
                            >
                                Services
                            </NavLink>
                        </p>
                        <p>
                            {" "}
                            <NavLink
                                className="nav-link footer-nav px-4 py-2 mx-1"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </p>
                    </div>
                    <div className="social col-span-3 text-center">
                        <h2 className="md:text-2xl sm:text-xl text-xl text-edu-blue text-center pb-4">
                            Follow Us On Social Media
                        </h2>
                        <a
                            href="https://www.facebook.com/tanvirwebtech"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {facebookIcon}
                        </a>
                        <a
                            href="https://www.twitter.com/tanvirwebtech"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {twitterIcon}
                        </a>
                        <a
                            href="https://www.linkedin.com/in/tanvirwebtech"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {linkedinIcon}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
