// Funciones de React/Next
import Head from "next/head";
import Image from "next/image";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"

//CSS

// import styles from "../styles/NavLanding/NavLanding.module.scss";


// Componentes

import NavLanding from "../components/NavLanding";
import SliderHeader from "../components/SliderHeader";
import FormLanding from "../components/FormLading";
import SliderHeader_V2 from "../components/SliderHeader_v2";
import InfoLanding from "../components/InfoLanding";
import VideoLanding from "../components/VideoLanding";


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
				<NavLanding />
			</header>

			<main className={''}>
	
				<section>
					<SliderHeader 
					autoplay = {true}
					/>
				</section>

				<section>
				   <SliderHeader_V2 />
				</section>

				<section>
					
				</section>

				<section>
					<VideoLanding />
				</section>

			</main>

			<footer className={''}></footer>
		</div>
	);
}
