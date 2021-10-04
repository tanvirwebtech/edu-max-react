import { useServices } from "../../hooks/useServices";
import SingleService from "../SingleService/SingleService";
import "./Services.css";

const Services = () => {
    const [allServices] = useServices(); //Getting With Custom Hook
    return (
        <div>
            <h2 className="heading font-medium text-center text-edu-navy my-8 text-3xl pb-8">
                We Are Providing
            </h2>
            <div className="container mx-auto all-services grid grid-cols-3 gap-4">
                {allServices.map((service) => (
                    <SingleService key={service.courseId} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
