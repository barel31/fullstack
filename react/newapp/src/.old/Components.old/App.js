import React, { useState } from 'react';
import './App.css';
import AddNewPost from './Components/AddNewPost';
import Post from './Components/Post.jsx';

export default function App() {
    const [list, setList] = useState([
        { name: 'a', price: 20 },
        { name: 'b', price: 10 },
        { name: 'c', price: 30 },
    ]);

    const add = (name, price) => {
        let tmp = {
            name: name,
            price: price,
        };

        setList([...list, tmp]); 
    };

    const deletePost = (index) => {
        let temp = list;
        temp.splice(index, 1);
        setList([...temp]);
    };

    return (
        <div className="App">
            <AddNewPost add={add} />
            {list.map((element, i) => {
                return <Post key={i} name={element.name} price={element.price} delete={deletePost} index={i} />;
            })}
        </div>
    );
}
