import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

export default function PageRoutes() {
	return (
		<Routes>
		  <Route path="/" element={ <Home /> } />
		  <Route path="/about" element={ <About /> } />
		  <Route path="/login" element={ <Login /> } />
		</Routes>
	);
}