import './App.css';
import { useState } from 'react';
import { Provider } from './ContextAPI.js';

function App() {

    return (
        <div className='App'>
            <h1>Smart House</h1>
            <button className='addRoom'>+</button>
            <Provider value={changePost}>
                <Post name={postDetails.name} price={postDetails.price} />
            </Provider>
        </div>
    );
}

export default App;
