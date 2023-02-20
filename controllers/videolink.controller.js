// const mongoose = require('mongoose');

import connectDb from "../lib/db";

import VideolinkModel from "../models/Videolink.model";

export async function handleUpdateDataVideolink(req, res) {
	await connectDb();

	const LocalKey = process.env.CLOUD_PAGE_SECRET_CODE_SYNC;
	const Remotekey = req.body.CLOUD_PAGE_SECRET_CODE_SYNC;
	const videolinks = req.body.videolinks;

	if (Remotekey !== LocalKey) return res.status(300).end(); // llave no proporcionada

	try {
		await VideolinkModel.deleteMany({});

		await VideolinkModel.insertMany(videolinks);

		return await res.status(200).json({ success: true });
	} catch (error) {
		console.log(error);
	}

	// Videolink
}

export async function getAllVideoLinks() {
	await connectDb();

	try {
		const grupo = await VideolinkModel.aggregate([
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
