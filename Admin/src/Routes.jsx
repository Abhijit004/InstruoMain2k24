import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Login from "./Screens/Login/Login";
import EventRegistration from "./Screens/EventRegistration/EventRegistration";

const AllRoutes = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <Routes>
            <Route path="/" element={<EventRegistration />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default AllRoutes;
