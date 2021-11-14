import { useState } from 'react';
import style from './ItemCount.module.scss';
import { useContext } from 'react';
import { CartContext } from '../../Context/cartContext';

function ItemCount({ initial, item, onAdd = null, showBtn = true }) {
	const [counterValue, setCounterValue] = useState(initial);
	const { addItem, updateItemsInCart } = useContext(CartContext);

	const sum = () => {
		if (counterValue < item.stock) {
			setCounterValue(counterValue + 1);
			if (!showBtn) {
				addItem(item, 1);
				updateItemsInCart(item, -1);
			}
		}
		// else {
		// 	console.log('No hay stock');
		// }
		// counterValue < stock
		// 	? setCounterValue(counterValue + 1)
		// 	: console.log('No hay stock');
		// if (!showBtn) {
		// 	addItem(item, 1);
		// }
	};
	const substract = () => {
		if (counterValue > 0) {
			setCounterValue(counterValue - 1);
			if (!showBtn) {
				addItem(item, -1);
				updateItemsInCart(item, 1);
				// updateItemsInCart(item);
			}
		}
		// else {
		// 	console.log('El número debe ser mayor a cero');
		// }
		// counterValue > 0
		// 	? setCounterValue(counterValue - 1)
		// 	: console.log('El número debe ser mayor a cero');

		// if (!showBtn) {
		// 	addItem(item, -1);
		// }
	};

	const handleClick = () => {
		onAdd(counterValue);
		addItem(item, counterValue);
	};

	return (
		<>
			<div className={style.counter}>
				<button className={style.counterBtn} onClick={substract}>
					-
				</button>
				<span className={style.counterValue}>{counterValue}</span>
				<button className={style.counterBtn} onClick={sum}>
					+
				</button>
			</div>

			{showBtn && (
				<button className='button mb-6' onClick={handleClick}>
					Add to cart
				</button>
			)}
		</>
	);
}

export default ItemCount;
