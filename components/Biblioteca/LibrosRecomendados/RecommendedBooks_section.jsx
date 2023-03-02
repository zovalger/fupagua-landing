import { useState } from "react";
import CategoryGroupRecommendedBook from "./CategoryGroupRecommendedBook";
import CategorySelector from "./CategorySelector";

// contenedor de todas las categorias
export default function RecommendedBooks_section({ data }) {
	const [selectedCategory, setSelectedCategory] = useState(data[0]._id);

	const onSelectCategory = (title) => {
		// seleccionar categoria (poner titulo)

		setSelectedCategory(title);
	};

	return (
		<div
		//  className={styleL.container}
		>
			<h2>Libros recomendados</h2>

			{/* recorrido para los selectores de categoria */}

			{data.map((category) => (
				<CategorySelector
					title={category._id}
					onSelectCategory={onSelectCategory}
					selectedCategory={selectedCategory}
					key={category._id}
				/>
			))}

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
