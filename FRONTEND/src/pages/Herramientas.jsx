import "./styles/herramientas.css";
import Herramientas1 from "../assets/Herramientas.1.png";
import Herramientas2 from "../assets/Herramientas.2.png";

export default function Herramientas() {
	return (
		<body>
			<div class="herramientas-container">
				<div class="h-box">
					<div class="box-img.">
						<img src={Herramientas2} />
					</div>
					<h3>Aprende sobre la lengua de señas</h3>
					<p>
						La lengua de señas es un sistema de comunicación gestual
						utilizado por personas sordas o con problemas de
						audición para expresar y recibir información. Se basa en
						movimientos de manos, expresiones faciales y corporales
						para transmitir significados, gramática y emociones.
						Cada país puede tener su propio sistema de lengua de
						señas, con vocabulario y estructuras gramaticales
						específicas.
					</p>
				</div>

				<div class="h-box">
					<div class="box-img.">
						<img src={Herramientas1} />
					</div>
					<h3>Sobre nuestro traductor SDL</h3>
					<p>
						Es una herramienta desarrollada para ayudar a las
						personas a comunicarse de forma sencilla, basada en el
						abecedario ASL que traduce letra por letra en timpo
						real.
					</p>
				</div>
			</div>
		</body>
	);
}
