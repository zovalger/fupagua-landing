import connectDb from "../../lib/db";
import Videolink from "../../../models/Videolink";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
	await connectDb();

	if (req.method === "POST") return await handleUpdateDataVideolink(req, res);

	return res.status(405).end(); // Method Not Allowed
};

async function handleUpdateDataVideolink(req, res) {
	const LocalKey = process.env.CLOUD_PAGE_SECRET_CODE_SYNC;
	const Remotekey = req.body.CLOUD_PAGE_SECRET_CODE_SYNC;
	const videolinks = req.body.videolinks;

	if (Remotekey === LocalKey) return res.status(300).end(); // llave no proporcionada


  // Videolink
}
