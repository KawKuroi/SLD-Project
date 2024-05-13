import { Link } from 'react-router-dom'
import registro from "../assets/registro.png";

export default function SignIn() {
	return (
		<body>
			<div className="container">
				<form action="" className="inicio-espacio" method="POST">
					<h2 className="title"> Inicia sesión </h2>
					<div className="campo-ingresar-datos">
						<i className="fas fa-user"></i>
						<input
							type="text"
							name="username"
							placeholder="Nombre de usuario"
						/>
					</div>
					<div className="campo-ingresar-datos">
						<i className="fas fa-lock"></i>
						<input
							type="password"
							name="password"
							placeholder="Contraseña"
						/>
					</div>
					<input type="submit" value="INICIAR" className="btn" />
				</form>

				<div className="informacion">
					<div className="informacion-texto">
						<h3> ¿Todavía no tienes una cuenta? </h3>
						<p>
							Crea una cuenta nueva para poder utilizar nuestras
							herramientas.
						</p>
						<Link to="/signOut">Regístrate</Link>
					</div>
					<img src={registro} className="image" />
				</div>
			</div>
		</body>
	);
}
