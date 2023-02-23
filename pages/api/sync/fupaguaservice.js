import { handleUpdateDataFupaguaServices } from "../../../controllers/services.controller";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {


	if (req.method === "POST") return await handleUpdateDataFupaguaServices(req, res);

	return res.status(405).end(); // Method Not Allowed
};
