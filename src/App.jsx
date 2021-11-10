import './scss/App.scss';

import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartContainer from './components/CartContainer';
import Contact from './components/Contact/Contact';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Hero />
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
	);
}

export default App;
