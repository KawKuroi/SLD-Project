import "./styles/traductor.css";

export default function Traductor() {
	return (
		<section className="camara">
			<div className="izquierda">
				<video
					id="video_camara"
					playsInline
					autoPlay
					style={{width: 1}}></video>
				<canvas
					id="canva_camara"
					width="400"
					height="400"></canvas>
				<canvas
					id="canva_camara_pequenia"
					width="28"
					height="28"></canvas>
			</div>

			<div className="derecha">
				<h3>¿Desea agregar esta letra?</h3>
				<div className="letter_box">
					<h2 id="resultado"></h2>
				</div>

				<div className="center">
					<div className="btnBox">
						<button id="agregar-btn" className="botones">
							Agregar
						</button>
						<button id="espacio-btn" className="botones">
							Espacio
						</button>
						<button id="borrar-btn" className="botones">
							Borrar
						</button>
						<button id="borrar-todo-btn" className="botones">
							Borrar todo
						</button>
						<button id="J-btn" className="botones">
							J
						</button>
						<button id="Ñ-btn" className="botones">
							Ñ
						</button>
						<button id="Z-btn" className="botones">
							Z
						</button>
					</div>
				</div>

				<form action="" method="POST">
					<button className="botones send_btn"> Enviar </button>
				</form>
			</div>
		</section>
	);
}
