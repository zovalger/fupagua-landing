const formateToEmbeLinkYotube = (urlYoutube) => {
	const code = urlYoutube.split("/").reverse()[0];
	return `https://www.youtube.com/embed/${code}`;
};

export default formateToEmbeLinkYotube;
