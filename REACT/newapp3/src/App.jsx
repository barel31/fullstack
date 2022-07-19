import React, { useState } from 'react';
import './App.scss';

import Food from './Components/Food';
import Drink from './Components/Drink';
import Video from './assets/videoBg.mp4';
import VideoBg from './Components/VideoBg';

const menuState = { none: undefined, food: <Food />, drink: <Drink /> };

export default function App() {
	const [activeMenu, setActiveMenu] = useState(menuState.none);

	const handleButton = (e) => {
		switch (e.target.id) {
			case 'food-button':
				setActiveMenu(menuState.food);
				break;
			case 'drink-button':
				setActiveMenu(menuState.drink);
				break;
			default:
				setActiveMenu(menuState.none);
				break;
		}
	};

	return (
		<div className='App app__flex-center'>
			<VideoBg video={Video} />
			<h1>Berlin</h1>

			<div
				className='menu-type-select app__flex-center'
				style={{ display: activeMenu === menuState.none ? 'flex' : 'none' }}>
				<button type='button' id='food-button' onClick={(e) => handleButton(e)}>
					תפריט אוכל
				</button>
				<button type='button' id='drink-button' onClick={(e) => handleButton(e)}>
					תפריט משקאות
				</button>
			</div>

			<button id='button-back' type='button' onClick={(e) => handleButton(e)}>
				X
			</button>

			{activeMenu}
		</div>
	);
}
