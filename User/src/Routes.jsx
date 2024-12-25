import { Route, Routes, useLocation } from "react-router-dom";
import UserRegistration from "./Screens/UserRegistration/UserRegistration";
import { useState, useEffect } from "react";
import { googleStatus } from "./Services/Api";
import { message } from "antd";
import Login from "./Screens/Login/Login"

const AllRoutes = () => {
    const location = useLocation();

    
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const handleStatus = async()=>{
        try{
            const res = await googleStatus();
            setIsLoggedIn(res.data.loggedIn);
            if(res.data.loggedIn){
                setUser(res.data.user);
                message.success("Logged in as "+res.data.user.name, 5);
                setDisabled(false);
            }else{
                message.warning("Please login to register", 5)
            }
        }catch(err){
            console.log("Login failed:");
            console.log(err.message);

        }
    }
    useEffect(()=>{
        handleStatus();
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <Routes>
            <Route exact path="/:eventId" element={<UserRegistration userInfo={user} />} />
            <Route exact path="/" element={<Login />} />
            {/* <Route path="/payment" element={<Payment />} /> */}
        </Routes>
    );
};

export default AllRoutes;
