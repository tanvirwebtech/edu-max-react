import React from "react";
import "./SingleService.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

const SingleService = (props) => {
    const { cName, trainer, cThumb, rating, enrolled, desc } = props.service;

    // Font Awesome Icons
    const userIcon = <FontAwesomeIcon icon={faUserAlt} />;
    const arrow = <FontAwesomeIcon icon={faArrowRight} />;

    return (
        <div className="single-service">
            <div className="card-img">
                <img src={cThumb} className="mx-auto" alt="" />
            </div>
            <div className="card-body p-2">
                <div className="card-title">
                    <h3 className="font-medium text-center text-2xl">
                        {cName}
                    </h3>
                    <h4 className="text-center">Trainer: {trainer}</h4>
                    <p className="text-center">{desc} </p>
                </div>
            </div>
            <div className="card-footer p-2 text-center">
                <div className="flex justify-between">
                    <div className="rating mx-2">
                        Rating:
                        {
                            <Rating
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                // fractions={rating}
                                initialRating={rating}
                                readonly
                            ></Rating>
                        }{" "}
                    </div>
                    <div className="enrolled mx-2">
                        {userIcon} Total Enrolled: {enrolled}
                    </div>
                </div>
                <button className="px-4 py-2 my-4 bg-blue-300 ">
                    See Details {arrow}
                </button>
            </div>
        </div>
    );
};

export default SingleService;
