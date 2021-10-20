import ItemList from '../ItemList/ItemList';
import './ItemListContainer.scss';

function ItemListContainer({ gretting }) {
	return (
		<section className="itemListContainer">
			<h1 className="title">{gretting}</h1>
			<div className="itemListContainer-container">
				<ItemList />
			</div>
		</section>
	);
}

export default ItemListContainer;
