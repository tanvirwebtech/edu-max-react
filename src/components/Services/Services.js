import React, { useEffect, useState } from "react";
import SingleServie from "../SingleService/SingleServie";
import "./Services.css";

const Services = () => {
  const [allServices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  return (
    <div>
      <h2 className="heading font-medium text-center main-color my-8 text-3xl">
        We Are Providing
      </h2>
      <div className="container mx-auto all-services grid grid-cols-3 gap-4">
        {allServices.map((service) => (
          <SingleServie key={service.courseId} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
