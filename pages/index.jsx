// Funciones de React/Next
import Head from "next/head";
import Image from "next/image";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

// * logica interna
import Counter from "../models/Counter";

import connectDb from "../lib/db";

//CSS

import styleService from "../styles/InfoLanding/Services.module.css";

// import styles from "../styles/NavLanding/NavLanding.module.scss";

// Componentes

import NavLanding from "../layouts/NavLanding";

import SliderHeader from "../components/SliderHeader";

import InfoLanding from "../components/InfoLanding";

import VideoLanding from "../components/VideoLanding";

import BookLanding from "../components/BookLanding";

import ActivityLanding from "../components/ActivityLanding";

import Contador from "../components/Contador";

import FooterLanding from "../layouts/FooterLanding";
import { getAllFupaguaServices } from "../controllers/services.controller";

// Librerias

/////*** ******////

export default function Home({ numberVisit,fupaguaServices }) {
	return (
		<div className={""}>
			<Head>
				<title>FUPAGUA</title>
				<meta
					name="description"
					content="Fundación de Personas Autista del Guárico"
				/>
				{/* <link rel="icon" href="/favicon.ico" /> */}
				<link rel="icon" href="/logo.jpg" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,100&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<header>
				<NavLanding />
			</header>

			<main className={""}>
				<section>
					<SliderHeader />
				</section>

				<Contador numberVisit={numberVisit} />
				<section>
					<InfoLanding  fupaguaServices={fupaguaServices}/>
				</section>

				<section>
					<BookLanding boton={true} />
				</section>

				<section>
					<VideoLanding boton={true} />
				</section>

				<section>
					<ActivityLanding />
				</section>
			</main>

			<footer className={""}>
				<FooterLanding />
			</footer>
		</div>
	);
}

export async function getServerSideProps(context) {
	await connectDb();
	let counter = {};
	let fupaguaServices = [];

	try {
		counter = await Counter.findOne({ title: "visit-count" });

		fupaguaServices = await getAllFupaguaServices();

		console.log(fupaguaServices);

		await counter.save();
	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			numberVisit: counter.num || 0,
			fupaguaServices: fupaguaServices || [],
		},
	};
}
