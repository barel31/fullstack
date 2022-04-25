import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';

function Home() {
	const nav = useNavigate();
	const { value1, value2 } = useContext(Context);
	return (
		<div>
			<button onClick={() => nav('/1')}>go to page 1</button>
			<button onClick={() => nav('/2')}>go to page 2</button>

			<h3>value1={value1}</h3>
			<h3>value2={value2}</h3>
		</div>
	);
}

export default Home;
