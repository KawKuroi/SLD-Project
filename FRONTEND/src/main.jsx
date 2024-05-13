import "./pages/styles/Normalize.css";
import "./pages/styles/main.css";
import { createRoot } from "react-dom/client";
import ProyectRoutes from './Routes.jsx';
import TwitterCard from './components/TwitterCard/TwitterCard.jsx'

const root = createRoot(document.getElementById("root"));
root.render(
	<ProyectRoutes />
);
