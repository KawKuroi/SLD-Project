// Utilities
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";

// Rutas
import Inicio from "./pages/Inicio.jsx";
import Herramientas from "./pages/Herramientas.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Traductor from "./pages/Traductor.jsx";

export default function ProyectRoutes() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path="/" element={<Navigate to="/inicio" />} />
				<Route path="/inicio" element={<Inicio />} />
				<Route path="/herramientas" element={<Herramientas />} />
				<Route path="/nosotros" element={<Nosotros />} />
				<Route path="/traductor" element={<Traductor />} />
			</Routes>
		</BrowserRouter>
	);
}
