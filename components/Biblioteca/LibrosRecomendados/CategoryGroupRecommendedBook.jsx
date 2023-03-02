//React-multi-carousel//
import Carousel from "react-multi-carousel";
import Recommended_Book from "./Recommended_Book";

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 720 },
		items: 2,
	},
	tablet: {
		breakpoint: { max: 720, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

export default function CategoryGroupRecommendedBook({
	data,
	selectedCategory,
}) {
	const { _id: title, registros } = data;

	// lista de titulos
	// lista de libros

	if (selectedCategory != title) return;

	return (
		<Carousel
			containerClass="carousel-container"
			ssr={true}
			dotListClass="custom-dot-list-style"
			itemClass="carousel-item-padding-40-px"
			responsive={responsive}
			infinite={true}
		>
			{registros.map((book) => (
				<Recommended_Book data={book} key={book._id} />
			))}
		</Carousel>
	);
}
