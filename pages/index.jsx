// Funciones de Reat/Next
import Head from "next/head";
import Image from "next/image";

//CSS

// import styles from "../styles/NavLanding/NavLanding.module.scss";


// Componentes

import NavLanding from "../components/NavLanding";
import SliderHeader from "../components/SliderHeader";

// Librerias



/////*** ******////

export default function Home() {
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
					<SliderHeader />
				</section>

			</main>

			<footer className={''}></footer>
		</div>
	);
}
