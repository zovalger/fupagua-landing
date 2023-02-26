const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
	id: String,
	title: String,
	subtitle: String,
	description: String,
	cota: String,
	autor: String,
	editionDate: String,
	city: String,
	editors: String,
	materia: String,
	height: Number,
	numberCopies: Number,
	numberCopiesAvailable: Number,
	numberPages: Number,
	duration: String,
	typeAdquisition: String,
	observations: String,
	// collection: String,
	type: String,
	// status: String,
	// syncCloud: Boolean,
	createdAt: String,
	// updatedAt: String,
	
	category: String,
	recommended: Boolean,

	portada: String,
	book_extra_img: [String],
});

export default mongoose.models.Book || mongoose.model("Book", bookSchema);
