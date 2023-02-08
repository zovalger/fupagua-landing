// Funciones de React/Next
import Head from "next/head";
import Image from "next/image";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"

//CSS


// import styles from "../styles/NavLanding/NavLanding.module.scss";


// Componentes

import NavLanding from "../components/NavLanding";

import SliderHeader from "../components/SliderHeader";

import InfoLanding from "../components/InfoLanding";

import VideoLanding from "../components/VideoLanding";

import BookLanding from "../components/BookLanding";

import ActivityLanding from "../components/ActivityLanding";

import FormLanding from "../components/FormLading";


// Librerias

import "react-multi-carousel/lib/styles.css";



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

				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
				<link 
				href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,100&display=swap" 
				rel="stylesheet"
				/>


			</Head>

			<header>
				<NavLanding />
			</header>

			<main className={''}>
	
				<section>
					<SliderHeader />
				</section>
			
				<section>
					<InfoLanding />
				</section>

				<section>
					<VideoLanding />
				</section>

				<section>
					<BookLanding />
				</section>

				<section>
					<ActivityLanding />
				</section>

			</main>

			<footer className={''}></footer>
		</div>
	);
}
