const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
	title: { type: String, require: true, unique: true },

	num: { type: Number, default: 0 },
});

export default mongoose.models.Counter ||
	mongoose.model("Counter", counterSchema);
