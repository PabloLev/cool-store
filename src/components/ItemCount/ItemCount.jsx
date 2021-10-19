import './ItemCount.scss';

function Counter({ stock, initial, onAdd, decrease }) {
	return (
		<div className="counter">
			<button className="counter-btn" onClick={decrease}>
				-
			</button>
			<span className="counter-value">{initial}</span>
			<button className="counter-btn" onClick={onAdd}>
				+
			</button>
		</div>
	);
}

export default Counter;
