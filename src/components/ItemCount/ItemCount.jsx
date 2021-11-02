import { useState } from 'react';
import style from './ItemCount.module.scss';

function ItemCount({ stock, initial }) {
	const [counterValue, setCounterValue] = useState(initial);
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
	return (
		<div className={style.counter}>
			<button className={style.counterBtn} onClick={substract}>
				-
			</button>
			<span className={style.counterValue}>{counterValue}</span>
			<button className={style.counterBtn} onClick={sum}>
				+
			</button>
		</div>
	);
}

export default ItemCount;
