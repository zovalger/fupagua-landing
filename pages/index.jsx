// Funciones de Reat/Next
import Head from "next/head";
import Image from "next/image";

//CSS

// import styles from "../styles/NavLanding/NavLanding.module.scss";


// Componentes

import NavLanding from "../components/NavLanding";
import HeaderLanding from "../components/HeaderLanding";

// Librerias



/////*** ******////

export default function Home() {
	const sliderImagenes = [
		'/IMG/1.jpg',
		'/IMG/2.jpg',
		'/IMG/1.jpg',
		'/IMG/Libro.png'
	]
	return (
		<div className={''}>
			<Head>
				<title>FUPAGUA</title>
				<meta
					name="description"
					content="fundacion de personas autista del estado guarico"
				/>
				{/* <link rel="icon" href="/favicon.ico" /> */}
				<link rel="icon" href="/logo.jpg" />
			</Head>

			<header>

			</header>

			<main className={''}>
				<section>
					<HeaderLanding 
					imagenes={sliderImagenes}
					/>
				</section>
			</main>

			<footer className={''}></footer>
		</div>
	);
}
