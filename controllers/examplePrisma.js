const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

(async function name(params) {
	const patient = await prisma.patient.create({
		data: {
			name: "juanito",
			age: 2,
		},
	});

	console.log(patient);

	// const patients = await prisma.patient.findMany()

	// console.log(patients);

	// const patient = await prisma.patient.findUnique({
	// 	where: { id: 2 },
	// });

	// console.log(patient);

	// const update = await prisma.patient.update({
	// 	where: { id: 1 },
	// 	data: { name: "juanito perez" },
	// });

	// console.log(update);

	// const deletePatient = await prisma.patient.delete({
	// 	where: { id: 1 },
	// });

	// console.log(deletePatient);
})()
	.catch((e) => {
		throw e;
	})
	.finally(async () => await prisma.$disconnect());
