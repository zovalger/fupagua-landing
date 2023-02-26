import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { useState } from "react";
import {
	AiOutlineSearch,
	AiOutlineSortAscending,
	AiOutlineSortDescending,
	AiOutlineClose,
	AiFillCaretUp,
	AiFillCaretDown,
	AiOutlineFilter,
} from "react-icons/ai";

import styles from "./SearchingForm.module.css";

export default function SearchingForm({ getListOfBooks, cancelQuery }) {
	const [query, setQuery] = useState({ title: "" });

	const [avanzado, setAvanzado] = useState(false);
	const [direction, setDirection] = useState("ASC");
	const [type, setType] = useState("book");
	const [sortBy, setSortBy] = useState("title");

	// console.log(avanzado);
	const onsubmit = (e) => {
		e.preventDefault();

		const req = {};

		if (avanzado) {
			console.log(avanzado);
			for (const key in query) {
				if (Object.hasOwnProperty.call(query, key)) {
					const valor = query[key];
					if (valor) req[key] = valor;
				}
			}
		} else {
			req.title = query.title;
			req.description = query.title;
			req.subtitle = query.title;
			req.cota = query.title;
			req.autor = query.title;
			req.materia = query.title;
			req.observations = query.observations;

			req.or = true;
		}

		req.sortBy = sortBy;
		req.direction = direction;
		req.type = type;

		console.log(req);

		getListOfBooks(req);
	};

	const onInputChange = ({ target: { name, value } }) => {
		// if (value.length <= 0) setInQuery(false);

		console.log(name, value);
		setQuery({
			...query,
			[name]: value,
		});
	};

	const AvanzadeMode = () => {
		setAvanzado(!avanzado);
		console.log(!avanzado ? "busqueda avanzada activada" : "busqueda simple");
	};
	const ascDESC = () => {
		setDirection(direction === "ASC" ? "DESC" : "ASC");
	};

	const SortByOnChange = ({ target: { value } }) => {
		setSortBy(value);
	};

	const typeOnChange = ({ target: { value } }) => {
		setType(value);
	};

	const dropQuery = () => {
		const q = {};

		for (const key in query) {
			if (Object.hasOwnProperty.call(query, key)) {
				// const valor = query[key];
				q[key] = "";
			}
		}

		setQuery(q);

		cancelQuery();
	};

	return (
		<div className="container">
			<Form className="my-3 " onSubmit={onsubmit}>
				<InputGroup controlId="searchinput">
					<Form.Control
						placeholder={!avanzado ? "Buscar" : "Título"}
						aria-label="Buscar"
						type="search"
						onChange={onInputChange}
						value={query.title}
						name="title"
						size="lg"

						// aria-describedby="basic-addon2"
					/>

					<button type="button" onClick={AvanzadeMode}></button>

					<Button
						className="btn btn-secondary"
						type="button"
						onClick={AvanzadeMode}
					>
						<AiOutlineFilter />
						{/* {avanzado ? <AiFillCaretDown /> : <AiFillCaretUp />} */}
					</Button>

					<Button type="submit">
						<AiOutlineSearch />
					</Button>
				</InputGroup>

				<div className={`row mt-3 ${!avanzado ? styles.no_active : ""}`}>
					<div className="col-6">
						<span></span>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Ordenar por</Form.Label>
							<Form.Select
								onChange={SortByOnChange}
								name="sortBy"
								value={sortBy}
							>
								<option value="title">Título</option>
								<option value="subtitle">Subtítulo</option>
								<option value="description">Descripción</option>
								<option value="cota">Cota</option>
								<option value="autor">Autor</option>
								<option value="materia">Materia</option>
							</Form.Select>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Autor</Form.Label>
								<Form.Control
									name="autor"
									type="search"
									// placeholder="Enter email"
									onChange={onInputChange}
									autoComplete="none"
									value={query.autor}
								/>
								<Form.Text className="text-muted"></Form.Text>
							</Form.Group>

							<Form.Label>Subtítulo</Form.Label>
							<Form.Control
								name="subtitle"
								type="search"
								// placeholder="Enter email"
								onChange={onInputChange}
								autoComplete="none"
								value={query.subtitle}
							/>
							<Form.Text className="text-muted"></Form.Text>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Cota</Form.Label>
							<Form.Control
								name="cota"
								type="search"
								// placeholder="Enter email"
								onChange={onInputChange}
								autoComplete="none"
								value={query.cota}
							/>
							<Form.Text className="text-muted"></Form.Text>
						</Form.Group>
					</div>

					<div className="col-6">
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Direccion</Form.Label>
							<Button
								className="bg-white text-black text-start w-100"
								type="button"
								onClick={ascDESC}
							>
								{
									direction === "ASC"
										? // <AiOutlineSortAscending />
										  "Ascendente"
										: "Descendente"
									// <AiOutlineSortDescending />
								}
							</Button>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Materia</Form.Label>
							<Form.Control
								name="materia"
								type="search"
								// placeholder="Enter email"
								onChange={onInputChange}
								autoComplete="none"
								value={query.materia}
							/>
							<Form.Text className="text-muted"></Form.Text>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Descripción</Form.Label>
							<Form.Control
								name="description"
								type="search"
								// placeholder="Enter email"
								onChange={onInputChange}
								autoComplete="none"
								value={query.description}
							/>
							<Form.Text className="text-muted"></Form.Text>
						</Form.Group>
					</div>
				</div>
			</Form>
		</div>
	);
}
