import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';

function Page1() {
	const { value1, setValue1 } = useContext(Context);
	const nav = useNavigate();
	return (
		<div>
			<h1>Page1</h1>
			<h3>vlue1 : {value1}</h3>
			<input
				type="text"
				value={value1}
				placeholder="enter new value for value1"
				onChange={(e) => {
					setValue1(e.target.value);
				}}
			/>
			<button onClick={() => nav('/')} style={{ display: 'block' }}>
				go home
			</button>
		</div>
	);
}

export default Page1;
