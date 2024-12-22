import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Routes";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/footer";

function App() {
    return (
        <Router>
            {/* <NavBar /> */}
            <div className="instruo-content" style={{
                display: "flex",
                flexDirection: "column"
            }}>
                
                <AllRoutes />
            </div>
            {/* <Footer /> */}
        </Router>
    );
}

export default App;
