import Head from "next/head";
import Image from "next/image";
import NavLanding from "../components/NavLanding";
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
				<link rel="icon" href="/logo.jpg" />
			</Head>

			<header>
				<NavLanding />
			</header>

			<main className={''}>
				<section>	<Section_info 
					contenido_headerI = "Hola mundo"
				/>
				</section>
			
			</main>

			<footer className={''}></footer>
		</div>
	);
}
