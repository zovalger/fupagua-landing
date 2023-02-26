import {
	handleGetDataBooks,
	handleUpdateDataBooks,
} from "../../../controllers/book.controller";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
	if (req.method === "POST") return await handleUpdateDataBooks(req, res);

	if (req.method === "GET") return await handleGetDataBooks(req, res);

	return res.status(405).end(); // Method Not Allowed
};
