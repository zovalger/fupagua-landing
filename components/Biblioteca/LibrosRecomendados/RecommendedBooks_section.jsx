import styles from "./RecommendedBooks_section.module.css";

import { useState } from "react";
import CategoryGroupRecommendedBook from "./CategoryGroupRecommendedBook";
import CategorySelector from "./CategorySelector";

// contenedor de todas las categorias
export default function RecommendedBooks_section({ data }) {
	const [selectedCategory, setSelectedCategory] = useState(data[0]._id);

	// seleccionar categoria (poner titulo)
	const onSelectCategory = (title) => setSelectedCategory(title);

	return (
		<div
		//  className={styleL.container}
		>
			<h2>Libros recomendados</h2>

			{/* recorrido para los selectores de categoria */}

			<div>
				{data.map((category) => (
					<CategorySelector
						title={category._id}
						onSelectCategory={onSelectCategory}
						selectedCategory={selectedCategory}
						key={category._id}
					/>
				))}
			</div>

			{/* recorrido de todos los grupos de categorias */}

			{data.map((category) => (
				<CategoryGroupRecommendedBook
					data={category}
					selectedCategory={selectedCategory}
					key={category._id}
				/>
			))}
		</div>
	);
}
