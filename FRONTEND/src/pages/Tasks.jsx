import { useEffect, useState } from "react";
import { getAllObjects } from "../api/Task.api";

export default function Tasks() {
	const [Objects, setObject] = useState([]);

	useEffect(() => {
		async function loadObjects() {
			const res = await getAllObjects();
			setObject(res.data);
		}
		loadObjects();
	}, []);

	return (
		<div>
			{Objects.map((Object) => (
				<div key={Object.id}>
					<h1>ID: {Object.id}</h1>
					<p>Contenido: {Object.content}</p>
				</div>
			))}
		</div>
	);
}
