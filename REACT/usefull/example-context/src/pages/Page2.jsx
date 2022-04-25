import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';

function Page2() {
	const { value2, setValue2 } = useContext(Context);
	const nav = useNavigate();
	return (
		<div>
			<h1>Page2</h1>
			<h3>vlue1 : {value2}</h3>
			<input
				type="text"
				value={value2}
				placeholder="enter new value for value1"
				onChange={(e) => {
					setValue2(e.target.value);
				}}
			/>
			<button onClick={() => nav('/')} style={{ display: 'block' }}>
				go home
			</button>
		</div>
	);
}

export default Page2;
