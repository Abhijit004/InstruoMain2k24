import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
// import EventRegistrationPage from "./components/EventRegistration/EventRegistration";
import EventRegistration from "./pages/EventRegistration/EventRegistration";
import HeadingSpan from "./components/HeadingSpan/HeadingSpan";

const AllRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <Routes>
      {/* <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/sponsor" element={<Sponsor />} />
      <Route path="/register" element={<Register />} /> */}
      <Route path="/test" element={<HeadingSpan direction={1} text={"Sponsors"} size={40}/>} />
      {/* <Route path="/test" element={<EventRegistration />} /> */}

    </Routes>
  );
};

export default AllRoutes;
