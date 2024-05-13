import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";
import Home from "./pages/Home.jsx";
import Tasks from "./pages/Tasks.jsx";

const AboutUs = () => <h1>AboutUs page</h1>;
const Contact = () => <h1>Contact page</h1>;

export default function ProyectRoutes() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<Home />} />
				<Route path="/aboutUs" element={<AboutUs />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/tasks" element={<Tasks />} />
			</Routes>
		</BrowserRouter>
	);
}
