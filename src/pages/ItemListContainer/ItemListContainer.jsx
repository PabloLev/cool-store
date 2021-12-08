import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getFirestore } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer({ gretting }) {
	const { categoryId } = useParams();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const db = getFirestore();
		async function getItems(db) {
			const itemsCol = categoryId
				? query(
						collection(db, "items"),
						where("category", "==", categoryId)
				  )
				: collection(db, "items");
			const snapshot = await getDocs(itemsCol);
			const itemsList = snapshot.docs.map((doc) => doc.data());
			return setProducts(itemsList);
		}
		getItems(db);
	}, [categoryId]);

	return (
		<ItemList titulo={gretting} category={categoryId} products={products} />
	);
}

export default ItemListContainer;
