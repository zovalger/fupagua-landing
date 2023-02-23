// const mongoose = require('mongoose');

import connectDb from "../lib/db";
import FupaguaServiceModel from "../models/FupaguaService.model";

// import VideolinkModel from "../models/Videolink.model";

export async function handleUpdateDataFupaguaServices(req, res) {
	await connectDb();

	const LocalKey = process.env.CLOUD_PAGE_SECRET_CODE_SYNC;
	const Remotekey = req.body.CLOUD_PAGE_SECRET_CODE_SYNC;
	const Services = req.body.Services;

	if (Remotekey !== LocalKey) return res.status(300).end(); // llave no proporcionada

	try {
		await FupaguaServiceModel.deleteMany({});

		await FupaguaServiceModel.insertMany(Services);

		return await res.status(200).json({ success: true });
	} catch (error) {
		console.log(error);
	}

	// Videolink
}

export async function getAllFupaguaServices() {
	await connectDb();

	try {
		// const grupo = await VideolinkModel.aggregate([
		// 	{
		// 		$group: {
		// 			_id: "$category",
		// 			registros: { $push: "$$ROOT" },
		// 		},
		// 	},
		// ]);

		const fupaguaservices = await FupaguaServiceModel.find().lean();

		console.log(fupaguaservices);

		return JSON.parse(JSON.stringify(fupaguaservices));
	} catch (error) {
		console.log(error);
	}
}
