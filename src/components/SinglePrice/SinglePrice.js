import React from "react";

const SinglePrice = (props) => {
    const {
        packageName,
        price,
        premium,
        lifeTimeAccess,
        liveSupport,
        realProject,
    } = props;
    return (
        <div>
            <div className="package text-center border-2 p-4 rounded">
                <h2 className="font-bold text-4xl text-center text-edu-navy my-4">
                    Package: {packageName}
                </h2>
                <h2 className="font-medium text-4xl text-center text-edu-sky mb-16">
                    Price: ${price}/mo
                </h2>
                <p className="my-2">
                    {premium ? "All Courses all Time" : "One Course at a Time"}
                </p>
                <p>
                    Life Time Access:{" "}
                    {lifeTimeAccess ? "Available" : "Not Available"}
                </p>
                <p className="my-2">
                    Live Support: {liveSupport ? "Available" : "Not Available"}
                </p>
                <p className="my-2">Real Life Project: {realProject}</p>
                <button className="px-4 py-2 bg-edu-navy text-white my-8">
                    Buy now
                </button>
            </div>
        </div>
    );
};

export default SinglePrice;
