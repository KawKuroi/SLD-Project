import { Link } from "react-router-dom";
import inicioSesion from "../assets/inicio-sesion.png";

export default function SignOut() {
	return (
		<body>
			<div className="container">
				<div className="informacion">
					<div className="informacion-texto">
						<h3> ¿Eres miembro? </h3>
						<p>
							Ingresa a tu cuenta y disfruta de nuestras
							herramientas.
						</p>
						<Link to="/">Inicia</Link>
					</div>
					<img src={inicioSesion} className="image" />
				</div>
				<form action="" className="registro-espacio" method="POST">
					<h2 className="title"> Regístrate </h2>
					<div className="campo-ingresar-datos">
						<i className="fas fa-user"></i>
						<input
							type="text"
							name="username"
							placeholder="Nombre de usuario"
						/>
					</div>
					<div className="campo-ingresar-datos">
						<i className="fas fa-envelope"></i>
						<input
							type="email"
							name="email"
							placeholder="Correo electrónico "
						/>
					</div>
					<div className="campo-ingresar-datos">
						<i className="fas fa-lock"></i>
						<input
							type="password"
							name="password1"
							placeholder="Contraseña"
						/>
					</div>
					<div className="campo-ingresar-datos">
						<i className="fas fa-lock"></i>
						<input
							type="password"
							name="password2"
							placeholder="Confirme contraseña"
						/>
					</div>
					<input type="submit" value="REGISTRARSE" className="btn" />
				</form>
			</div>
		</body>
	);
}
