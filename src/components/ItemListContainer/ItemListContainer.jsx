import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router';

function ItemListContainer({ gretting }) {
	const { categoryId } = useParams();
	return <ItemList titulo={gretting} category={categoryId} />;
}

export default ItemListContainer;
