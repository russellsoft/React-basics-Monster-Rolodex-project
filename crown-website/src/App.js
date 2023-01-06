import { Routes, Route } from 'react-router-dom'
import Navigation from './route/navigation/navigation.component';
import Authorization from './route/sign-in/authorization.component';
import Home from './route/home/home.component';

const Shop = () => {
	return (
		<div>
			<h1>This is shop</h1>
		</div>
	)
}

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='auth' element={<Authorization />} />
			</Route>
		</Routes>
	)
}

export default App;
