// const mongoose = require('mongoose');

import connectDb from "../lib/db";
import BookModel from "../models/Book.model";

export async function handleUpdateDataBooks(req, res) {
	await connectDb();

	// console.log(req.body);

	const LocalKey = process.env.CLOUD_PAGE_SECRET_CODE_SYNC;
	const Remotekey = req.body.CLOUD_PAGE_SECRET_CODE_SYNC;
	const books = req.body.books;

	if (Remotekey !== LocalKey) return res.status(300).end(); // llave no proporcionada

	try {
		await BookModel.deleteMany({});

		await BookModel.insertMany(books);

		return await res.status(200).json({ success: true });
	} catch (error) {
		console.log(error);
	}

	// Videolink
}

// ************************************************************************************
// 									obtener todos los libros que tengan una category
// ************************************************************************************
export async function getRecommendBooks() {
	await connectDb();

	try {
		const grupo = await BookModel.aggregate([
			{
				$match: {
					category: { $exists: true, $ne: "" },
				},
			},
			{
				$group: {
					_id: "$category",
					registros: { $push: "$$ROOT" },
				},
			},
		]);

		return JSON.parse(JSON.stringify(grupo));
	} catch (error) {
		console.log(error);
	}
}

// ************************************************************************************
// 										busqueda de los libros de la biblioteca
// ************************************************************************************
export async function getBooks_query(query) {
	await connectDb();

	try {
		const grupo = await BookModel.find().lean();

		return grupo;
	} catch (error) {
		console.log(error);
	}
}

// ************************************************************************************
// 					controlador de la ruta para la peticiones de busqueda de los libros
// ************************************************************************************
export async function handleGetDataBooks(req, res) {
	const { query } = req;

	try {
		const books = await getBooks_query(query);
		if (books.length <= 0) return;
		res.json(books);
	} catch (error) {
		console.log(error);
	}
}
