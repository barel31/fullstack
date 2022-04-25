import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Context from './Context';
import './App.css';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

function App() {
	const [value1, setValue1] = useState(1);
	const [value2, setValue2] = useState(10);

	return (
		<div className="App">
			<Context.Provider value={{ value1, setValue1, value2, setValue2 }}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/1" element={<Page1 />} />
					<Route path="/2" element={<Page2 />} />
				</Routes>
			</Context.Provider>
		</div>
	);
}

export default App;
