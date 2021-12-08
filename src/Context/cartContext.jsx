import { createContext, useState } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [theBuyer, setTheBuyer] = useState({});
	const updateItemsInCart = (item, num) => {
		item.stock = item.stock + num;
	};
	const addItem = (item, quantity) => {
		const isInCart = cart.some((product) => product.id === item.id);
		const newCart = [...cart];
		if (item.stock >= 0) {
			if (!isInCart) {
				item.stock = item.stock - quantity;
				const newItem = {
					...item,
					stock: item.stock,
					counter: quantity,
				};

				setCart([...newCart, newItem]);
			} else {
				const foundedItem = newCart.find(
					(product) => product.id === item.id
				);
				foundedItem.counter = foundedItem.counter + quantity;
				foundedItem.stock = foundedItem.stock - quantity;
				setCart([...newCart]);
			}
		}
	};

	const removeItem = (id) => {
		setCart(cart.filter((item) => item.id !== id));
	};

	const emptyCart = () => {
		setCart([]);
	};
	const handleBuyer = (theBuyer) => {
		setTheBuyer(theBuyer);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addItem,
				removeItem,
				emptyCart,
				updateItemsInCart,
				handleBuyer,
				theBuyer,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
