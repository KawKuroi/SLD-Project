// Utilities
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";

// Rutas
import Inicio from "./pages/Inicio.jsx";
import Herramientas from "./pages/Herramientas.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Traductor from "./pages/Traductor.jsx";
import SignIn from "./pages/signIn.jsx";
import SignOut from "./pages/signOut.jsx";

import Tasks from "./pages/Tasks.jsx";

const AboutUs = () => <h1>AboutUs page</h1>;
const Contact = () => <h1>Contact page</h1>;

export default function ProyectRoutes() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path="/" element={<Navigate to="/signIn" />} />
				<Route path="/inicio" element={<Inicio />} />
				<Route path="/herramientas" element={<Herramientas />} />
				<Route path="/nosotros" element={<Nosotros />} />
				<Route path="/traductor" element={<Traductor />} />
				<Route path="/signIn" element={<SignIn />} />
				<Route path="/signOut" element={<SignOut />} />
			</Routes>
		</BrowserRouter>
	);
}
