import { useEffect, useState } from "react";

export const useServices = () => {
    const [allServices, setAllServices] = useState([]);
    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setAllServices(data));
    }, []);
    return [allServices, setAllServices];
};
