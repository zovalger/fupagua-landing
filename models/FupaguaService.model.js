const mongoose = require("mongoose");

const fupaguaserviceSchema = new mongoose.Schema({
	id: String,
	title: String,
	description: String,
	img: String,
	empleados: [
		{
			id: String,
			name: String,
			FPV: String,
			description: String,
			email: String,
			img: String,
		},
	],
});

export default mongoose.models.Fupaguaservice ||
	mongoose.model("Fupaguaservice", fupaguaserviceSchema);
