import './App.css';
import { useState } from 'react';
import Post from './Components/Post';
import { Provider } from './ContextAPI.js';

function App() {
    const [postDetails, setPostDetails] = useState({ name: 'barel', price: 100 });

    const changePost = (name, price) => {
        setPostDetails({ name: name, price: price });
    };

    return (
        <div className='App'>
            <Provider value={changePost}>
                <Post name={postDetails.name} price={postDetails.price} />
            </Provider>
        </div>
    );
}

export default App;
