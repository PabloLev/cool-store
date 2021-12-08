import "./BuyerForm.scss";
import { useState } from "react";
import { doc, collection, addDoc, updateDoc } from "firebase/firestore";
import { getFirestore } from "../../firebase/index";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import { useHistory } from "react-router-dom";

function BuyerForm({ finalPurchase, total }) {
	const { emptyCart, handleBuyer } = useContext(CartContext);
	const history = useHistory();
	const [buyer, setBuyer] = useState({
		buyerName: "",
		buyerSurname: "",
		buyerEmail: "",
		buyerCity: "",
		buyerZipCode: "",
		buyerAdress: "",
	});

	const date = new Date();
	const orderDate = date.toLocaleDateString();

	const handleBuyerChange = (e) => {
		setBuyer({ ...buyer, [e.target.name]: e.target.value });
	};

	const onHandleSubmit = (e) => {
		const db = getFirestore();
		try {
			e.preventDefault();
			const newOrder = {
				buyer,
				finalPurchase,
				date: orderDate,
				total,
			};

			const orderInfo = collection(db, "orders");
			addDoc(orderInfo, newOrder).then(({ id }) => {
				history.push("/purchased");
				emptyCart();
				let key = "id";
				buyer[key] = id;

				handleBuyer(buyer);

				alert(
					"Thanks for purchase " +
						buyer.buyerName +
						"! Your code is: " +
						id
				);
			});
			finalPurchase.forEach((item) => {
				const docRef = doc(db, "items", item.id);
				updateDoc(docRef, { stock: item.stock });
			});
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<form
			id='buyerForm'
			onSubmit={onHandleSubmit}
			className='form-checkout'
			action=''
		>
			<input
				name='buyerName'
				className='line-input half'
				type='text'
				placeholder='First Name*'
				onChange={handleBuyerChange}
				pattern='[a-zA-Z][a-zA-Z ]{2,}'
				required
			/>
			<input
				name='buyerSurname'
				className='line-input half fix-margin'
				type='text'
				placeholder='Surname*'
				onChange={handleBuyerChange}
				pattern='[a-zA-Z][a-zA-Z ]{2,}'
				required
			/>
			<input
				name='buyerEmail'
				className='line-input'
				type='email'
				onChange={handleBuyerChange}
				placeholder='Email*'
				required
			/>
			<input
				name='buyerCity'
				className='line-input half'
				type='text'
				placeholder='City*'
				onChange={handleBuyerChange}
				pattern='[a-zA-Z][a-zA-Z ]{2,}'
				required
			/>
			<input
				name='buyerZipCode'
				className='line-input half fix-margin'
				type='number'
				onChange={handleBuyerChange}
				placeholder='Zip code*'
				required
			/>
			<input
				name='buyerAdress'
				className='line-input'
				type='text'
				onChange={handleBuyerChange}
				placeholder='Adress*'
				required
			/>
		</form>
	);
}

export default BuyerForm;
