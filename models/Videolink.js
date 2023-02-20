const mongoose = require("mongoose");

const videolinkSchema = new mongoose.Schema({
	id: String,
	url: String,
	title: String,
	description: String,
	createdAt: String,
	category: String,
});

export default mongoose.models.Videolink ||
	mongoose.model("Videolink", videolinkSchema);
