import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.scss';
// import Products from '../../data/Products.json';
import { useEffect, useState } from 'react';
import Loader from '../Loader';
import { useParams } from 'react-router';
import { getFirestore } from '../../firebase';
import {
	collection,
	getDocs,
	getDoc,
	doc,
	query,
	where,
} from 'firebase/firestore';

function ItemDetailContainer() {
	const [itemDetail, setItemDetail] = useState(null);
	const [showCount, setShowCount] = useState(false);
	const [itemsInCart, setItemsInCart] = useState(undefined);

	const { itemId } = useParams();
	//Promise
	// const getItem = (data) =>
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
	// 	getItem(Products)
	// 		.then((res) => {
	// 			setItemDetail(res.find((details) => details.id === itemId));
	// 		})

	// 		.catch((err) => console.log(err));
	// }, [itemId]);

	// useEffect(() => {
	// 	const db = getFirestore();
	// 	const biciRef = doc(db, 'items', '0');
	// 	getDoc(biciRef).then((snapshot) => {
	// 		if (snapshot.exists()) {
	// 			console.log(snapshot);
	// 		}
	// 	});
	// }, []);

	useEffect(() => {
		//traigo la base de datos
		const db = getFirestore();
		const getItem = (db) => {
			const theItem = doc(db, 'items', itemId);
			getDoc(theItem).then((snapshot) => {
				if (snapshot.exists()) {
					console.log(snapshot.data());
					setItemDetail(snapshot.data());
				}
			});
		};
		getItem(db);
	}, [itemId]);

	//PARA TRAER UN SOLO ELEMENTO
	// useEffect(() => {
	// 	//traigo la base de datos
	// 	const db = getFirestore();
	// 	//Creo la función getItems y le paso la base de datos como parametros
	// 	async function getItem(db) {
	// 		const theItem = query(
	// 			collection(db, 'items'),
	// 			where('id', '==', itemId)
	// 		);
	// 		const snapshot = await getDocs(theItem);

	// 		const foundedItem = snapshot.docs.map((doc) => doc.data());
	// 		console.log(foundedItem[0]);
	// 		return setItemDetail(foundedItem[0]);
	// 	}
	// 	getItem(db);
	// }, [itemId]);

	const onAdd = (items) => {
		setShowCount(!showCount);
		setItemsInCart(items);
	};

	return (
		<div className='itemDetailContainer'>
			{itemDetail ? (
				<ItemDetail
					key={itemDetail.id}
					item={itemDetail}
					onAdd={onAdd}
					showCount={showCount}
					itemsInCart={itemsInCart}
				/>
			) : (
				<Loader />
			)}
		</div>
	);
}

export default ItemDetailContainer;
