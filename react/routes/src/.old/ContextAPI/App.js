import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './Components/Post';
import { Provider } from './ContextAPI.js';

function App() {
    const [postDetails, setPostDetails] = useState({ name: 'barel', price: 100 });

    const changePost = (name, price) => {
        setPostDetails({ name: name, price: price });
    };

    return (
        <div className='App'>
            <h1>test</h1>
                <Post name={postDetails.name} price={postDetails.price} />
            <Provider value={changePost}/>
        </div>
    );
}

export default App;
