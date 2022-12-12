import Head from "next/head";
import Image from "next/image";
import NavLanding from "../components/NavLanding";
// import styles from "../styles/NavLanding/NavLanding.module.scss";



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
				<NavLanding />
			</header>

			<main className={''}>
				<section>secciones</section>
			</main>

			<footer className={''}></footer>
		</div>
	);
}
