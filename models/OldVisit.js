const mongoose = require("mongoose");

const OldVisitSchema = new mongoose.Schema({
	clientIp: { type: String },
	userAgent: { type: String },
});

export default mongoose.models.OldVisit ||
	mongoose.model("OldVisit", OldVisitSchema);
