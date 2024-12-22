import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import UserRegistration from "./Screens/UserRegistration/UserRegistration";
import Login from "./Screens/Login/Login";
import Register from "./Screens/Register/Register";
import Payment from "./Screens/Payment/Payment";

const AllRoutes = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <Routes>
            <Route path="/" element={<UserRegistration maxTeamSize={4} minTeamSize={1} regType={"combined"} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/payment" element={<Payment />} /> */}
        </Routes>
    );
};

export default AllRoutes;
