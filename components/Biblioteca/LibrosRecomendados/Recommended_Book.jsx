import styles from "./Recommended_Book.module.css";

import Image from "next/image";
import { useState } from "react";

export default function Recommended_Book({ data }) {
	const [imgDownloaded, setImgDownloaded] = useState(data.portada);
	const onErrorLoad = () => setImgDownloaded("/unknowBook.jpg");

	return (
		<div
		className={styles.container__book}
		>
		
			<div
				className={styles.container__img}
			>
				<Image
					src={imgDownloaded}
					width={400}
					height={400}
					alt="Libro de FUPAGUA"
					onError={onErrorLoad}
				/>
			</div>

			<div
			className={styles.container__text}
			>
					<div>
				<h4 style={{ marginTop: "20px" }}>{data.title}</h4>
			</div>
				<p>{data.description}</p>
			</div>
		</div>
	);
}
