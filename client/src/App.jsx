import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./Routes";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/footer";
import { useState } from "react";
import FooterNew from "./components/Footer/FooterNew";
import { Analytics } from "@vercel/analytics/react"
// import AuthProvider from "./components/AuthContext/AuthContext";

function App() {

    const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);
	const login = (userData) => {
		setUser(userData);
		localStorage.setItem("user", JSON.stringify(userData));
	};
	const logout = () => {
		setUser(null);
		localStorage.setItem("user", JSON.stringify(null));
    };
    
    return (
		<Router>
			<Analytics />
			<NavBar user={user} logout={logout} login={login} />
			<div className="instruo-content">
				<AllRoutes user={user} logout={logout} login={login} />
			</div>
			{/* <Footer /> */}
			<FooterNew />
		</Router>
	);
}

export default App;
