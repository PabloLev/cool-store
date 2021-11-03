import './scss/App.scss';

import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path={process.env.PUBLIC_URL + '/'}>
					<Hero />

					<main className='main-container'>
						<ItemListContainer gretting='ProductosXXXs' />
					</main>
				</Route>
				<Route exact path={process.env.PUBLIC_URL + '/item/:itemId'}>
					<main className='main-container'>
						<ItemDetailContainer />
					</main>
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
