import { useForm } from "react-hook-form";
import "./styles/traductor.css";
import { createMail } from "../api/Task.api";
import { useState } from "react";

export default function Traductor() {
	// módulos de react-hook-form para manejo de formularios
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	// función que se ejecuta cuando se da click a el botón de enviar correo
	const onSubmit = handleSubmit(async (data) => {
		console.log("Cargando");
		const res = await createMail(data);
		console.log(res);
		console.log("Enviado");
		setSuccessMessage('Correo enviado correctamente ✅!');
		reset();
	});

	// jjj
	const [successMessage, setSuccessMessage] = useState('');

	
	// Página web
	return (
		<section className="camara">
			<div className="izquierda">
				<video
					id="video_camara"
					playsInline
					autoPlay
					style={{ width: 1 }}></video>
				<canvas id="canva_camara" width="400" height="400"></canvas>
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

				<form className="traductor-form" onSubmit={onSubmit} action="/">
					{errors.content && <span>Este campo es requerido</span>}
					<textarea
						autoFocus
						type="text"
						placeholder="*Traducción"
						{...register("content", { required: true })}
					/>
					{errors.name && <span>Este campo es requerido</span>}
					<textarea
						type="text"
						placeholder="*Nombre"
						{...register("name", { required: true })}
					/>
					{errors.email && <span>Este campo es requerido</span>}
					<textarea
						type="text"
						placeholder="*Correo"
						{...register("email", { required: true })}
					/>
					<button className="botones send_btn">
						{" "}
						Enviar Correo{" "}
					</button>
				</form>
				{successMessage && <span className="success">{successMessage}</span>}
			</div>
		</section>
	);
}
