import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
// import Products from '../../data/Products.json';
import { getFirestore } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

function ItemListContainer({ gretting }) {
	const { categoryId } = useParams();
	const [products, setProducts] = useState([]);

	// const getData = (data) =>
	// 	new Promise((resolve, reject) => {
	// 		setTimeout(() => {
	// 			if (data) {
	// 				resolve(data);
	// 			} else {
	// 				reject('No se encontró nada');
	// 			}
	// 		}, 1000);
	// 	});

	// useEffect(() => {
	// 	getData(Products)
	// 		.then((res) =>
	// 			categoryId
	// 				? setProducts(
	// 						res.filter(
	// 							(product) => product.category === categoryId
	// 						)
	// 				  )
	// 				: setProducts(Products)
	// 		)
	// 		.catch((err) => console.log(err));
	// }, [categoryId]);

	//PARA TRAER todos los elementos
	// useEffect(() => {
	// 	const db = getFirestore();
	// 	getDocs(collection(db, 'items')).then((snapshot) => {
	// 		setProducts(snapshot.docs.map((doc) => doc.data()));
	// 	});
	// }, []);

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
