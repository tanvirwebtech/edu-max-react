import React from "react";
import { useHistory } from "react-router";
import { useServices } from "../../hooks/useServices";
import SingleService from "../SingleService/SingleService";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
    const [allServices] = useServices();
    allServices.length = 4;

    const history = useHistory();
    const handleClick = () => {
        history.push("/services");
    };

    // Font Awesome Icon
    const arrow = (
        <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
    );
    return (
        <>
            <div className="home-bg">
                <div className="container grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 mx-auto hero-content">
                    <div className="md:py-32 sm:py-24 py-20 px-8 md:px-2 sm:px-2 sm:text-left md:text-left text-center">
                        <h2 className="font-bold text-5xl text-white">
                            Welcome TO <br />{" "}
                            <span className="main-color">EDU MAX</span>{" "}
                        </h2>
                        <p className="text-white my-8 text-xl">
                            Edu Max is the one the largest e-learning platform
                            in Bangladesh. We have more than 50+ Qualified
                            trainer for different courses. Our trainee
                            satisfaction is 95%. At the middle of 2021 we have
                            trained 3600+ students in different category.{" "}
                        </p>

                        <Link to="/about">
                            <button className="px-4 py-2 my-8 bg-white">
                                Learn More {arrow}
                            </button>
                        </Link>
                    </div>
                    <div className=""></div>
                </div>
            </div>

            {/* Service Section  */}
            <section>
                <div className="container mx-auto">
                    <h2 className="text-center font-bold heading text-edu-navy text-3xl md:text-5xl sm:text-3xl my-20 pb-8">
                        Have a look at Our Services
                    </h2>
                    <div className="services mx-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4  p-4 border-2">
                        {allServices.map((service) => (
                            <SingleService
                                key={service.courseId}
                                service={service}
                            ></SingleService>
                        ))}
                    </div>
                    <div className="see-more text-center">
                        <button
                            onClick={handleClick}
                            className="text-xl md:text-2xl sm:text-xl font-medium bg-edu-navy text-white border-2 md:px-8 sm:px-4 px-4 md:py-4 sm:py-2 py-2 my-8"
                        >
                            See More {arrow}
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
