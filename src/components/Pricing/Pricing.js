import React from "react";
import SinglePrice from "../SinglePrice/SinglePrice";

const Pricing = () => {
    return (
        <div>
            <h2 className="text-center my-16 text-4xl text-edu-sky">
                We Have Amazing Pricing For You
            </h2>
            <div className="grid grid-cols-3 gap-4 container mx-auto">
                <SinglePrice
                    packageName="Silver"
                    price="10"
                    realProject="2"
                ></SinglePrice>
                <SinglePrice
                    packageName="Gold"
                    price="30"
                    realProject="10"
                    lifeTimeAccess
                ></SinglePrice>
                <SinglePrice
                    packageName="Diamond"
                    price="50"
                    realProject="20"
                    lifeTimeAccess
                    liveSupport
                    premium
                ></SinglePrice>
            </div>
        </div>
    );
};

export default Pricing;
