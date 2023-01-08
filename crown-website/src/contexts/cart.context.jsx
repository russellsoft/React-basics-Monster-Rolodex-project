import { useState, createContext } from "react"

export const CartContext = createContext({
	cartItems: [],
	setCartItems: () => {}
})

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([])
	console.log(cartItems)
	const value = { cartItems, setCartItems }
 	return (<CartContext.Provider value={value}>{ children }</CartContext.Provider>)
}