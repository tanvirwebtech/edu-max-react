import { useServices } from "../../hooks/useServices";
import SingleService from "../SingleService/SingleService";
import "./Services.css";

const Services = () => {
    const [allServices] = useServices(); //Getting With Custom Hook
    return (
        <div>
            <h2 className="heading font-medium text-center text-edu-navy my-8 md:text-3xl sm:text-3xl text-2xl pb-8">
                We Are Providing
            </h2>
            <div className="container mx-auto all-services grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {allServices.map((service) => (
                    <SingleService key={service.courseId} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
