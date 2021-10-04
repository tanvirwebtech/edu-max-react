import React from "react";
import "./SingleService.css";

const SingleServie = (props) => {
  const { cName, trainer, cThumb, rating, enrolled, desc } = props.service;
  return (
    <div className="single-service">
      <div className="card-img">
        <img src={cThumb} alt="" />
      </div>
      <div className="card-body p-2">
        <div className="card-title">
          <h3 className="font-medium text-center text-2xl">{cName}</h3>
          <h4 className="text-center">Trainer: {trainer}</h4>
          <p className="text-center">{desc} </p>
        </div>
      </div>
      <div className="card-footer p-2 text-center">
        <div className="flex justify-between">
          <div className="rating mx-2">Rating: {rating}</div>
          <div className="enrolled mx-2">Total Enrolled: {enrolled}</div>
        </div>
        <button className="px-4 py-2 my-4 bg-blue-300 ">See Details</button>
      </div>
    </div>
  );
};

export default SingleServie;
