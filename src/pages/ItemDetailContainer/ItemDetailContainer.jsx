import ItemDetail from '../../components/ItemDetail/ItemDetail';
// import './ItemDetailContainer.scss';
import { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import { useParams } from 'react-router';
import { getFirestore } from '../../firebase';
import { getDoc, doc } from 'firebase/firestore';

function ItemDetailContainer() {
	const [itemDetail, setItemDetail] = useState(null);
	const [showCount, setShowCount] = useState(false);
	const [itemsInCart, setItemsInCart] = useState(undefined);

	const { itemId } = useParams();

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
