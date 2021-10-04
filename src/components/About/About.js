import React from "react";
import "./About.css";
import team from "../../images/team.jpg";
const About = () => {
    return (
        <div>
            <div className="about-bg">
                <div className="container mx-auto hero-content">
                    <div className="py-32">
                        <h2 className="font-bold text-center text-5xl text-white about-heading">
                            About US
                        </h2>
                    </div>
                </div>
            </div>

            {/* Who are We Section  */}

            <div className="team-work container mx-auto">
                <div className="grid grid-cols-2 gap-4 my-8">
                    <div className="team-thumb">
                        <img src={team} alt="" className="mx-auto" />
                    </div>
                    <div className="team-details text-center flex flex-col justify-center px-16">
                        <h3 className="font-medium text-3xl px-8">
                            Who are we?
                        </h3>
                        <p>
                            Our goal is to remove any technical or financial
                            barriers that can prevent you from learning new
                            things. Our qualitiful courses empower individuals
                            to build their career if you're a beginner, we're
                            excited to help you on your journey!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
