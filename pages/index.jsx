import Head from "next/head";
import Image from "next/image";
import HeaderLanding from "../components/HeaderLanding";
import Section_info from "../components/Section_info";
// import styles from "../styles/NavLanding/NavLanding.module.scss";




export default function Home() {
	return (
		<div className={''}>
			<Head>
				<title>FUPAGUA</title>
				<meta
					name="description"
					content="Fundación de personas autista del estado guárico"
				/>
				{/* <link rel="icon" href="/favicon.ico" /> */}
				<link rel="icon" href="/logo.jpg"/>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
				<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
			</Head>

			<header>
				<HeaderLanding />
			</header>

			<main className={''}>
				<section>	
					<Section_info 
					contenido_headerI = 'En la Fundación de Personas Autistas del estado Guárico, trabajamos por el bienestar, integración y una mejor calidad de vida de las personas con autismo y otros trastornos del desarrollo.'
				/>
				</section>
			
			</main>

			<footer className={''}></footer>
		</div>
	);
}
