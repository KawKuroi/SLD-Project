import "./styles/nosotros.css";
import Nosotros1 from "../assets/Nosotros.1.png";
import Nosotros2 from "../assets/Nosotros.2.jpg";

export default function Nosotros() {
	return (
		<body>
			<section className="nosotros">
				<div className="row">
					<div className="img-container">
						<img src={Nosotros1} />
					</div>

					<div className="contenido">
						<h3>¿Quiénes somos?</h3>
						<p>
							Somos un apasionado grupo de estudiantes de
							ingeniería de sistemas comprometidos con la
							inclusión y la accesibilidad. Nuestra dedicación nos
							ha llevado a crear este traductor de lenguaje de
							señas a texto, con el objetivo de derribar barreras
							comunicativas y facilitar la interacción entre
							personas sordas y oyentes.
						</p>
					</div>
				</div>
			</section>

			<section className="proposito">
				<div className="row2">
					<div className="contenido">
						<h3>Nuestro propósito</h3>
						<p>
							Enfrentamos el desafío de mejorar la comunicación
							inclusiva para todos. Nuestro propósito es
							proporcionar una herramienta intuitiva y eficiente
							que permita a las personas sordas expresarse
							libremente y a aquellos que no conocen el lenguaje
							de señas comprender y participar activamente en la
							conversación.
						</p>
					</div>
					<div className="img-container">
						<img src={Nosotros2} />
					</div>
				</div>
			</section>

			<section className="why">
				<div className="contenido">
					<h3>¿Por qué elegir SLD?</h3>
					<p>
						Nuestro traductor se destaca por su precisión, facilidad
						de uso y compromiso con la comunidad sorda. Utilizamos
						tecnología de vanguardia y nos esforzamos por mejorar
						continuamente nuestro servicio en base a
						retroalimentación y necesidades reales. Al elegir
						nuestro traductor, estás optando por una herramienta que
						promueve la inclusión y la igualdad de oportunidades
						para todos.
					</p>
				</div>
			</section>
		</body>
	);
}
