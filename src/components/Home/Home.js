import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-bg">
      <div className="container grid grid-cols-2 mx-auto hero-content">
        <div className="py-32">
          <h2 className="font-bold text-5xl text-white">
            Welcome TO <br /> <span className="main-color">EDU MAX</span>{" "}
          </h2>
          <p className="text-white my-8 text-xl">
            Edu Max is the one the largest e-learning platform in Bangladesh. We
            have more than 50+ Qualified trainer for different courses. Our
            trainee satisfaction is 95%. At the middle of 2021 we have trained
            3600+ students in different category.
          </p>
          <button className="px-4 py-2 my-8 bg-white">Learn More</button>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Home;
