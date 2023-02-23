import Layout from "../layouts/Layout";
import VideoLanding from "../components/VideoLanding";
import Carousel from "react-bootstrap/Carousel";

import style from "../styles/Videos/videos.module.css";
import { getAllVideoLinks } from "../controllers/videolink.controller";
import formateToEmbeLinkYotube from "../utility/formateToEmbeLinkYotube";

function GroupExample({ videolinkGroups }) {
	return (
		<Layout title="Videos">
			<div className={style.container}>
				<VideoLanding buton={false} />

				<div className={style.container__header}>
					<h2>Videos de aprendizaje</h2>
				</div>

				<div>
					{/* recorrido de todas las categorias */}
					{videolinkGroups.map((category, index1) => (

            // el key es para identificar elementos en un array (manias de react)
						<div key={index1}>

							{/* se coloca el nombre de la categoria */}

							<h4>{category._id}</h4>

							{/* recorrido de todos los registros de los videos*/}

							{category.registros.map((registro, index2) => (
								<Video data={registro} key={index2} />
							))}
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}


// componente para mostrar un video

function Video({ data }) {
  // recibimos los datos y lo desectructuramos
	const { url, description, title } = data;

	return (
		<div className={style.container__video}>
			<div className="row">
				<div className="col-lg-4 col-sm-12">
					<div className={style.video}>
						<iframe
							src={
								url
									? formateToEmbeLinkYotube(url)
									: "https://www.youtube.com/embed/dWFBlfZSkak"
							}
							title="YouTube video player"
						></iframe>
					</div>
				</div>

				<div className="col-lg-8 col-sm-12">
					<div className="p-2">
						<div>{title}</div>
						{/* <div className="small">Link: {url}</div> */}
						{/* <div className="small">Categoria: {categoryvideo.title}</div> */}
						<div>{description}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GroupExample;

export async function getServerSideProps(context) {
	let videolinkGroups = [];

	try {
		videolinkGroups = await getAllVideoLinks();
	} catch (error) {
		console.log(error);
	}

	console.log(videolinkGroups);
	return {
		props: {
			videolinkGroups: videolinkGroups || [],
		},
	};
}
