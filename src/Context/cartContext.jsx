import { createContext, useState } from 'react';

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	// console.log('cart', cart);

	const addItem = (item, quantity) => {
		//Si no está en el carrito lo agrego
		const newItem = { ...item, counter: quantity };
		const isInCart = cart.some((product) => product.id === item.id);
		if (!isInCart) {
			setCart([...cart, newItem]);
		} else {
			const foundedItem = cart.find((product) => product.id === item.id);
			foundedItem.counter = foundedItem.counter + quantity;
		}
		return;
	};

	const removeItem = (id) => {
		//Filtro todos los que no coinciden con el id, eliminando el del id correspondiente
		setCart(cart.filter((item) => item.id !== id));
	};

	const emptyCart = () => {
		//Vacio el array cart
		setCart([]);
	};

	return (
		<CartContext.Provider value={{ cart, addItem, removeItem, emptyCart }}>
			{children}
		</CartContext.Provider>
	);
};
