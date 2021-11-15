import { createContext, useState } from 'react';

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	// console.log('cart', cart);
	const updateItemsInCart = (item, num) => {
		item.stock = item.stock + num;
	};
	const addItem = (item, quantity) => {
		const isInCart = cart.some((product) => product.id === item.id);
		if (item.stock >= 0) {
			if (!isInCart) {
				item.stock = item.stock - quantity;
				const newItem = {
					...item,
					stock: item.stock,
					counter: quantity,
				};

				setCart([...cart, newItem]);
			} else {
				const foundedItem = cart.find(
					(product) => product.id === item.id
				);
				foundedItem.counter = foundedItem.counter + quantity;
				foundedItem.stock = foundedItem.stock - quantity;
				setCart([...cart]);
			}
		}
	};

	const removeItem = (id) => {
		//Filtro todos los que no coinciden con el id, eliminando el del id correspondiente
		// const findedItem = cart.find((item) => (item.id = id));
		// findedItem.stock = findedItem.stock + findedItem.count;
		// setCart([...cart]);
		setCart(cart.filter((item) => item.id !== id));
	};

	const emptyCart = () => {
		//Vacio el array cart
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{ cart, addItem, removeItem, emptyCart, updateItemsInCart }}
		>
			{children}
		</CartContext.Provider>
	);
};
