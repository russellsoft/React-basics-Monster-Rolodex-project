import './cart-dropdown.styles.scss'

import Button from '../button/button.component'
import { CartContext } from '../../contexts/cart.context'

import { useContext } from 'react'

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext)
	const { name, imageUrl, price } = cartItems

	return ( 
		<div className="cart-dropdown-container">
			<div className="cart-item">{name}</div>
			<Button>К оформлению</Button>
		</div>
	)
}

export default CartDropdown