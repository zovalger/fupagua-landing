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
				<link rel="icon" href="/logo.jpg" />
			</Head>

			<header>
				<HeaderLanding />
			</header>

			<main className={''}>
				<section>	<Section_info 
					contenido_headerI = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero praesentium totam adipisci, odio ratione, vitae perferendis ullam atque, tenetur neque ex minima fugiat dolore dicta tempora illo debitis itaque assumenda!"
				/>
				</section>
			
			</main>

			<footer className={''}></footer>
		</div>
	);
}
