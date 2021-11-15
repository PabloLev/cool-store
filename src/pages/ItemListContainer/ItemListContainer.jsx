import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
// import Products from '../../data/Products.json';
import { getFirestore } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

function ItemListContainer({ gretting }) {
	const { categoryId } = useParams();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		//traigo la base de datos
		const db = getFirestore();
		//Creo la función getItems y le paso la base de datos como parametros
		async function getItems(db) {
			const itemsCol = categoryId
				? query(
						collection(db, 'items'),
						where('category', '==', categoryId)
				  )
				: collection(db, 'items');
			const snapshot = await getDocs(itemsCol);
			const itemsList = snapshot.docs.map((doc) => doc.data());
			console.log(itemsCol);
			return setProducts(itemsList);
		}
		getItems(db);
	}, [categoryId]);

	return (
		<ItemList titulo={gretting} category={categoryId} products={products} />
	);
}

export default ItemListContainer;
