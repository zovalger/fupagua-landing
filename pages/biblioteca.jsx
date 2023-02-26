import Head from "next/head";
import Layout from "../layouts/Layout";
import Image from "next/image";

import BookLanding from "../components/BookLanding";

//React-multi-carousel//
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//CSS

import style from "../styles/Biblioteca/Biblioteca.module.css";
import styleL from "../styles/Biblioteca/LibrosR.module.css";
import styles from "../styles/Biblioteca/Book.module.css";
import { getRecommendBooks } from "../controllers/book.controller";
import BibliotecaSearch from "../components/Biblioteca/BibliotecaSearch";

function GroupExample({ recommendedBooks }) {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 720 },
			items: 2,
		},
		tablet: {
			breakpoint: { max: 720, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<Layout title="Biblioteca">
			<div className={style.container}>
				<BookLanding boton={false} />
				{/*Libros recomendados*/}

				<div className={styleL.container}>
					<h2>Libros recomendados</h2>

					<Carousel
						containerClass="carousel-container"
						ssr={true}
						dotListClass="custom-dot-list-style"
						itemClass="carousel-item-padding-40-px"
						responsive={responsive}
						infinite={true}
					>

					{recommendedBooks.map((recomendado, index1)=>{
						return(
							<LibrosRecomendados
							key={index1}
							data = {recomendado}
							/>
						)
					}
					)}

					</Carousel>
				</div>

				{/*Catalogo de libros*/}

				<BibliotecaSearch />
			</div>
		</Layout>
	);
}

function LibrosRecomendados({ data }) {

	
    const { _id, registros } = data;
	return (
		<div>
		{registros.map((id, index2)=>{
			return(
				<div key={index2} >
				{id.recommended ? <div className={styleL.container__book}>

				<div>
					<h4 style={{ marginTop: "20px" }}>{id.title}</h4>
				</div>
				<div className={styleL.container__img}>
					<Image
						src={id.portada}
						width={400}
						height={400}
						alt="Libro de FUPAGUA"
					/>
				</div>

				<div className={styleL.container__text}>
					<h2>Sipnosis:</h2>
					<p>
						{id.description}
					</p>
				</div>
			</div>
		: <div></div>}
		</div>
			 )
			}
			)}
		</div>
		
	);
}

function Libros({ dataBook }) {
	const {
		title,
		subtitle,
		autor,
		description,
		cota,
		img_cloudinary_url,
		img_local_url,
	} = dataBook;

	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<img
					src={img_cloudinary_url ? img_cloudinary_url : img_local_url}
					alt="foto de portada"
				/>
			</div>
			<div className={styles.text}>
				<div className={styles.title}>{title}</div>
				<div className={styles.subtitle}> {subtitle}</div>
				<div className={styles.autor}>
					<b>Autor: </b> {autor}
				</div>
				<div className={styles.autor}>
					<b>cota: </b>
					{cota}
				</div>
				<div className={styles.description}>{description}</div>
			</div>
		</div>
	);
}

export default GroupExample;

export async function getServerSideProps(context) {
	let recommendedBooks = [];

	try {
		recommendedBooks = await getRecommendBooks();
	} catch (error) {
		console.log(error);
	}

	console.log(recommendedBooks);
	return {
		props: {
			recommendedBooks: recommendedBooks || [],
		},
	};
}
