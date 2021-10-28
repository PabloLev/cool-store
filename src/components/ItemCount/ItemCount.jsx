import style from './ItemCount.module.scss';

function ItemCount({ stock, initial, onAdd, decrease }) {
	return (
		<div className={style.counter}>
			<button className={style.counterBtn} onClick={decrease}>
				-
			</button>
			<span className={style.counterValue}>{initial}</span>
			<button className={style.counterBtn} onClick={onAdd}>
				+
			</button>
		</div>
	);
}

export default ItemCount;
