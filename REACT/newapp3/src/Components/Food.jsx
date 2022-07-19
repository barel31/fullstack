import React from 'react';

const Food = () => {
	return (
		<div className='food-menu menu-container app__flex-center'>
			<h1>תפריט אוכל</h1>

			<div className='menu-container-inner'>
				<button type='button'>ספיישלים בלחמניה</button>
				<button type='button'>עיקריות בצלחת</button>
				<button type='button'>נשנושים</button>
				<button type='button'>בכריך</button>
				<button type='button'>מתוקים</button>
			</div>
		</div>
	);
};

export default Food;
