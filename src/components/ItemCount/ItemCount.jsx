import { useState } from 'react';
import style from './ItemCount.module.scss';
import { useContext } from 'react';
import { CartContext } from '../../Context/cartContext';

function ItemCount({ stock, initial, onAdd, item }) {
	const [counterValue, setCounterValue] = useState(initial);
	const { addItem } = useContext(CartContext);
	const sum = () => {
		counterValue < stock
			? setCounterValue(counterValue + 1)
			: console.log('No hay stock');
	};
	const substract = () => {
		counterValue > 0
			? setCounterValue(counterValue - 1)
			: console.log('El número debe ser mayor a cero');
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

			<button className='button mb-6' onClick={handleClick}>
				Add to cart
			</button>
		</>
	);
}

export default ItemCount;
