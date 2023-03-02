export default function CategorySelector({
	title,
	onSelectCategory,
	selectedCategory,
}) {
	// es true o false (usar para cambiar de estilo del boton y que se vea que esta seleccionado)
	// selectedCategory

	return <div onClick={() => onSelectCategory(title)}>{title}</div>;
}
