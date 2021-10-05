import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router";
import img from "../../images/404.jpg";
const NotFound = () => {
    const history = useHistory();
    const handleBackToHome = () => {
        history.push("/");
    };
    return (
        <div>
            <img src={img} alt="" className="not-found mx-auto my-8 w-1/2" />
            <div className="back-to-home-btn text-center">
                <button
                    className="text-xl md:text-2xl sm:text-xl font-medium bg-edu-navy text-white border-2 md:px-8 sm:px-4 px-4 md:py-4 sm:py-2 py-2 my-8"
                    onClick={handleBackToHome}
                >
                    Take Me To Home {<FontAwesomeIcon icon={faHome} />}
                </button>
            </div>
        </div>
    );
};

export default NotFound;
