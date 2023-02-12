import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import style from "../styles/InfoLanding/contador.module.css";

export default function Contador({ numberVisit }) {
	const [numCounter, setNumCounter] = useState(numberVisit);

	console.log(numberVisit);

	const sumCounter = async () => {
		try {
			const fechaEnviada = localStorage.getItem("counterSendedRequestFupagua");

			// no se envia la solicitud si no a pasado un dia desde la ultima visita
			if (fechaEnviada)
				if (fechaEnviada - Date.now() <= 86400000)
					return console.log("no a pasado un dia");

			const res = await axios.post("/api/visit", {});

			if (res.data) {
				localStorage.setItem("counterSendedRequestFupagua", Date.now());
				setNumCounter(res.data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			sumCounter();
		}, 4000);
	}, []);

	return (
		<>
			<div className={style.container}>
				<div className={style.contador}>
					<h2>Visitantes:</h2>
					<p>{numCounter}</p>
				</div>
			</div>
		</>
	);
}
