import styles from "./RecommendedBooks_section.module.css";

import { useState } from "react";
import CategoryGroupRecommendedBook from "./CategoryGroupRecommendedBook";
import CategorySelector from "./CategorySelector";
import Carousel from "react-multi-carousel";

// contenedor de todas las categorias
export default function RecommendedBooks_section({ data }) {
	const [selectedCategory, setSelectedCategory] = useState(data[0]._id);

	// seleccionar categoria (poner titulo)
	const onSelectCategory = (title) => setSelectedCategory(title);


	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 650 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 650, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2,
		},
	};
	
	return (
		<div
		 className={styles.container}
		>
			<h2>Libros recomendados</h2>

			{/* recorrido para los selectores de categoria */}

	
			<Carousel
			containerClass="carousel-container"
			ssr={true}
			dotListClass="custom-dot-list-style"
			itemClass="carousel-item-padding-20-px"
			responsive={responsive}
			infinite={true}
			removeArrowOnDeviceType={["tablet", "mobile"]}
		>
				{data.map((category) => (
					<CategorySelector
						title={category._id}
						onSelectCategory={onSelectCategory}
						selectedCategory={selectedCategory}
						key={category._id}
					/>
				))}
				</Carousel>

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
