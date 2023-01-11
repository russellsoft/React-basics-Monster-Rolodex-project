import './category-preview.styles.scss'

import ProductCard from '../product-card/product-card.components'

const CategoryPreview = ({ title, products }) => {
	return (
		<div className="category-preview-container">
			<div className="title">
				{title.toUpperCase()}
			</div>
			<div className="preview">
				{
					products
						.filter((_, index) => index < 4)
						.map(product => (
							<ProductCard key={product.id} product={product} />
						))
				}
			</div>
		</div>
	)
}

export default CategoryPreview