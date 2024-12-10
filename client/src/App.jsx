import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Routes";
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <Router>
            <NavBar />
            <div className="instruo-content">
                <AllRoutes />
            </div>
        </Router>
    );
}

export default App;
