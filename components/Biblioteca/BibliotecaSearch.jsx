import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import SearchingForm from "./SearchingForm";
import style from "./BibliotecaSearch.module.css";
import styleF from '../../styles/Biblioteca/Book.module.css'
import Image from "next/image";

export default function BibliotecaSearch({}) {
	const [books, setBooks] = useState([]);
	const [booksQuery, setBooksQuery] = useState([]);
	const [inQuery, setInQuery] = useState(false);

	const url = "/api/sync/books";

	const refreshData = async () => {
		console.log("get");

		const myPromise = axios.get(url);

		toast.promise(
			myPromise,
			{
				id: "refreshDataBiblioteca",
				loading: "cargando datos",
				success: (res) => {
					console.log(res);
					setBooks(res.data);
				},
				error: (err) => `This just happened: ${err.toString()}`,
			},
			{
				success: {
					duration: 10,
				},
			}
		);
	};

	useEffect(() => {
		refreshData();
	}, []);

	const getListOfBooks = async (query) => {
		try {
			const myPromise = axios.get(url, { params: query });

			// e.preventDefault();

			toast.promise(
				myPromise,
				{
					id: "refreshDataBiblioteca",
					loading: "cargando datos",
					success: (res) => {
						console.log(res);
						setInQuery(true);
						setBooksQuery(res.data);
						if (res.data.length <= 0)
							return toast.error("No coincide ningun elemento", {
								duration: 2500,
							});
					},
					error: (err) => `This just happened: ${err.toString()}`,
				},
				{
					success: {
						duration: 10,
					},
				}
			);
		} catch (error) {
			console.log(error);
			const { response: res } = error;

			if (res.status === 404)
				return toast.error(res.data.message, { duration: 2000 });
		}
	};


	
	const llenarLista = (book) => (
		<div className={styleF.container__book}>
			<div className={styleF.container__bookImage}>
				<Image
				src={book.portada}
				height={400}
				width={400}
				alt="portada"
				/>
			</div>
			<div className={styleF.container__bookText}>

			<p><strong>Titulo:</strong> {book.title}, <strong>Subtitulo:</strong> {book.subtitle}, 
			<strong>Cota:</strong> {book.cota}, <strong>Autores:</strong> {book.autor}, <strong>Editorial:</strong> {book.editors}, <strong>Fecha de edición:</strong> {book.editionDate}, <strong>Tamaño:</strong> {book.height}, <strong>Observaciones:</strong> {book.observations}, <strong>Tipo:</strong> {book.type}, <strong>Materias:</strong> {book.materia}.
			</p>
		
			</div>

			{/* {JSON.stringify(book)} */}

		</div>

		
	);

	return (
		<>
			<div className={style.container__catalogo}>
				<div className={style.Header__catalogo}>
					<div className={style.Header__text}>
						<h2>Bienvenidos a la Biblioteca {`"Juana Milano de Díaz"`}</h2>
						<p>
							Aquí encontrará información referente de los libros que expone
							nuestra biblioteca pública.
						</p>
					</div>

					<SearchingForm
						getListOfBooks={getListOfBooks}
						cancelQuery={() => setInQuery(false)}
					/>
				</div>

				<div className={style.content_catalogo}></div>
			</div>

			<div className={styleF.container}>
				<div className={styleF.container_two}>
					{/*********************************************************************
									muestra el contenido de la busqueda solo si
											hay algun valor en el formulario de busqueda
											hay almenos un elemento en mostrado 
					*********************************************************************/}
					{inQuery && booksQuery.length > 0
						? booksQuery.map(llenarLista)
						: books.map(llenarLista)}
				</div>
			</div>
		</>
	);
}
