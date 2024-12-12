import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Sponsorship from "./Screens/Sponsorship/Sponsorship";
// import EventRegistrationPage from "./components/EventRegistration/EventRegistration";
import EventRegistration from "./Screens/EventRegistration/EventRegistration";
import HeadingSpan from "./components/HeadingSpan/HeadingSpan";
import HypeCard from "./components/HypeCard/HypeCard";
import { EnvironmentFilled, LineChartOutlined } from "@ant-design/icons";
import CustomButton from "./components/CustomButton/CustomButton";
import Home from "./Screens/Home/Home";
import UserRegistration from "./Screens/UserRegistration/UserRegistration";
// import LampSectionHeader from "./components/LampSectionHeader/LampSectionHeader";

const AllRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/sponsors" exact element={<Sponsorship />} />
      <Route path="/eregister" element={<EventRegistration />} />
      <Route
        path="/uregister"
        element={
          <UserRegistration
            maxTeamSize={4}
            minTeamSize={1}
            regType={"combined"}
          />
        }
      />
      {/* <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/sponsor" element={<Sponsor />} />
      <Route path="/register" element={<Register />} /> */}
      {/* <Route path="/test" element={<HypeCard count={6000} desc={"lorem ipsum dolor sit amen lorem itspd jkhfg l"} subtitle={'Footfall'} color={'#C096DD'} Icon={EnvironmentFilled}/>} /> */}
      {/* <Route path="/test" element={<HeadingSpan direction={1} text={"Sponsors"} size={40}/>} /> */}
      {/* <Route path="/test" element={<EventRegistration />} /> */}
    </Routes>
  );
};

export default AllRoutes;
