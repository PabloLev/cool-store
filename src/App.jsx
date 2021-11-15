import './scss/App.scss';
import Header from './components/Header';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import HeroContainer from './pages/HeroContainer/HeroContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartContainer from './pages/CartContainer';
import Contact from './pages/ContactContainer/ContactContainer';
import { CartProvider } from './Context/cartContext';

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path='/'>
						<HeroContainer />
					</Route>
					<Route exact path='/category/:categoryId'>
						<main className='main-container'>
							<ItemListContainer gretting='Products' />
						</main>
					</Route>
					<Route exact path='/item/:itemId'>
						<main className='main-container'>
							<ItemDetailContainer />
						</main>
					</Route>
					<Route exact path='/shop'>
						<main className='main-container'>
							<ItemListContainer gretting='Products' />
						</main>
					</Route>
					<Route exact path='/contact'>
						<main className='main-container'>
							<Contact />
						</main>
					</Route>
					<Route exact path='/cart'>
						<main className='main-container'>
							<CartContainer />
						</main>
					</Route>
					<Route>
						<h1>Página no encontrada</h1>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
