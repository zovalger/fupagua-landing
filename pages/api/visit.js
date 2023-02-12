import connectDb from "../../lib/db";
import Counter from "../../models/Counter";
import OldVisit from "../../models/OldVisit";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
	await connectDb();
	switch (req.method) {
		case "GET":
			await handleGetCounter(req, res);
			break;
		case "POST":
			await handleSumCounter(req, res);
			break;
		case "PUT":
			// await handleUpdateCounter(req, res);
			break;
		case "DELETE":
			// await handleDeleteCounter(req, res);
			break;
		default:
			res.status(405).end(); // Method Not Allowed
	}
};

const handleGetCounter = async (req, res) => {
	// todo: buscar contador de visitas
	// todo: si no existe crearlo

	const counter =
		(await Counter.findOne({ title: "visit-count" })) ||
		new Counter({ title: "visit-count" });

	await counter.save();

	// todo: devolver el numero del contador
	return res.status(200).send(counter.num);
};
const handleSumCounter = async (req, res) => {
	const userAgent = req.headers["user-agent"];
	const clientIp =
		req.headers["x-forwarded-for"] || req.connection.remoteAddress;

	try {
		// todo: ver anterior solicitud
		const oldVisit = await OldVisit.findOne();

		// todo: si no existe la ultima visita se crea

		if (!oldVisit) {
			const newVisit = new OldVisit({ userAgent, clientIp });
			await newVisit.save();
		} else {
			// todo: si los datos son iguales rechazar la solicitud con un status
			// todo: si es diferente los datos seguir con la funcion

			console.log("valores de la visita");

			console.log(oldVisit.clientIp);
			console.log(clientIp);

			console.log(oldVisit.userAgent);
			console.log(userAgent);

			if (oldVisit.clientIp === clientIp)
				return await res
					.status(403)
					.json({ message: "ya fue visitado desde esta ip" });
					
			if (oldVisit.userAgent === userAgent)
				return await res
					.status(403)
					.json({ message: "ya fue visitado desde este navegador" });
		}

		oldVisit.userAgent = userAgent;
		oldVisit.clientIp = clientIp;

		await oldVisit.save();

		// todo: buscar el contador de las visitas

		const counter = await Counter.findOne({ title: "visit-count" });

		// todo: sumar 1 al contador de visitas

		counter.num++;

		await counter.save();

		return res.status(200).send(counter.num);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error creating Counter", error });
	}
};

async function handleUpdateCounter(req, res) {}

async function handleDeleteCounter(req, res) {}
