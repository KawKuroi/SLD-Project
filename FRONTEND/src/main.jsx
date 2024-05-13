import "./pages/styles/main.css";
import { createRoot } from "react-dom/client";
import ProyectRoutes from './Routes.jsx';

const root = createRoot(document.getElementById("root"));
root.render(
	<ProyectRoutes />
);
