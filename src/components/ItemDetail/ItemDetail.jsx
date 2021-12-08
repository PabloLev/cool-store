import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import Rating from "../Rating/Rating";
import { Link } from "react-router-dom";

function ItemDetail({ item, onAdd, showCount, itemsInCart }) {
	return (
		<section className='itemDetail'>
			<article className='itemDetail-card'>
				<div className='card-img-container'>
					<img
						className='img-primary'
						src={item.img}
						alt={item.name}
					/>
				</div>
				<div className='card-info'>
					<h2 className='info-title'>{item.name}</h2>
					<Rating stars={4} />
					<div>
						{item.discount !== 0 ? (
							<>
								<span className='item-price'>
									${item.price * (1 - item.discount / 100)}
								</span>
								<span className='item-price promo-price'>
									${item.price}
								</span>
							</>
						) : (
							<span className='item-price'>${item.price}</span>
						)}
					</div>
					<p className='info-description'></p>
					<div className='wishList-container'>
						<span>Add to wishlist</span>
						<i className='icon-icon-hart text-primary'></i>
					</div>
					<div className='info-categories'>
						<span>Categories: {item.category}</span>
					</div>
					<div className='social-icon-container'>
						<div className='social-icon'>
							<i className='icon-icon-facebook'></i>
						</div>
						<div className='social-icon'>
							<i className='icon-icon-instagram'></i>
						</div>
						<div className='social-icon'>
							<i className='icon-icon-twitter'></i>
						</div>
					</div>
					<div className='itemDetail-description mt-6'>
						<h3 className='description-title'>Varius tempor</h3>
						<p className='description-text mt-3'>
							{item.description}
						</p>
					</div>

					{item.stock > 0 ? (
						!showCount ? (
							<ItemCount initial={0} onAdd={onAdd} item={item} />
						) : (
							<div className='mt-6 mb-6'>
								<Link to='/cart'>
									<button className='button me-6 mt-3'>
										To check Out ({itemsInCart})
									</button>
								</Link>
								<Link to={`/shop`}>
									<button className='button mt-3'>
										Continue Shopping
									</button>
								</Link>
							</div>
						)
					) : (
						<>
							<h1>Out of stock</h1>
							<Link to={`/cart`}>
								<button className='button mt-3 me-6'>
									To check Out ({itemsInCart})
								</button>
							</Link>
							<Link to={`/shop`}>
								<button className='button mt-3'>To shop</button>
							</Link>
						</>
					)}
				</div>
				<Link className='close' to='/shop'>
					<i className='icon-icon-cross'></i>
				</Link>
			</article>

			<div className='itemDetail-related'></div>
		</section>
	);
}

export default ItemDetail;
