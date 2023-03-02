import Head from "next/head";
import Layout from "../layouts/Layout";
import Image from "next/image";

import BookLanding from "../components/BookLanding";

import "react-multi-carousel/lib/styles.css";

//CSS

import style from "../styles/Biblioteca/Biblioteca.module.css";
import styleL from "../styles/Biblioteca/LibrosR.module.css";
import styles from "../styles/Biblioteca/Book.module.css";
import { getRecommendBooks } from "../controllers/book.controller";
import BibliotecaSearch from "../components/Biblioteca/BibliotecaSearch";
import { useState } from "react";
import RecommendedBooks_section from "../components/Biblioteca/LibrosRecomendados/RecommendedBooks_section";

export default function GroupExample({ recommendedBooks }) {


	return (
		<Layout title="Biblioteca">
			<div className={style.container}>
				{/* informacion */}
				<BookLanding boton={false} />

				{/*Libros recomendados*/}
				<RecommendedBooks_section data={recommendedBooks} />

				{/*Catalogo de libros*/}

				<BibliotecaSearch />
			</div>
		</Layout>
	);
}

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
