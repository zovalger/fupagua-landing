function getVideoId(url) {
	var regexes = [
		/[?&]v=([^&#]*)/g, // Formato completo de enlace
		/\/([^\/]*)$/g, // Formato de enlace acortado
		/embed\/([^\/]*)/g, // Formato de enlace de inserción
	];

	for (var i = 0; i < regexes.length; i++) {
		var regex = regexes[i];
		var match = regex.exec(url);

		if (match) {
			return match[1];
		}
	}

	return null; // Si no se encuentra ninguna coincidencia
}

const formateToEmbeLinkYotube = (url) => {
	const code = getVideoId(url);

	return `https://www.youtube.com/embed/${code}`;
};

export default formateToEmbeLinkYotube;
