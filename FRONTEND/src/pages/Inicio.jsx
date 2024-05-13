import { Link } from "react-router-dom";
import imagenInicio from "../assets/imagenInicio.png";
import "./styles/index.css";


export default function Inicio() {
	return (
		<section className="inicio-banner">
			<div className="content-banner">
				<h1>Signal </h1><h1>Language </h1><h1>Detector</h1>
				<h2>Empieza a traducir ahora</h2><h2> mismo fácil y rápido </h2>
				<Link to="/traductor" className="btn1" style={{marginTop:25}}>
					¡Comienza!
				</Link>
			</div>
			<div className="inicio-img">
				<img src={imagenInicio} />
			</div>
		</section>
	);
}
