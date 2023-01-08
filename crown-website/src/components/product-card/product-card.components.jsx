import './product-card.styles.scss'

import Button from '../button/button.component'
import { CartContext } from '../../contexts/cart.context'

import { useContext } from 'react'

const ProductCard = ({product}) => {
		const { price, name, imageUrl } = product
		const { setCartItems } = useContext(CartContext)
		
		const addItem = () => {
			setCartItems(product)
		}

		return (
			<div className="product-card-container">
				<img src={imageUrl} alt={name} />
				<div className="footer">
					<span className='name'>{name}</span>
					<span className='price'>{price}</span>
				</div>
				<Button buttonType='inverted' onClick={addItem}>В корзину</Button>
			</div>
		)
}

export default ProductCard