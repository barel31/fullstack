import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from './ContextAPI.js';
import AddRoom from './Components/CreateRoom';
import Rooms from './Components/Rooms';
import HomePage from './Components/HomePage';

function App() {
    const [rooms, setRooms] = useState([]);
    const [products, setProducts] = useState([[]]);

    const addNewRoom = (name, type, color) => {
        setRooms([...rooms, { name: name, type: type, color: color }]);
        setProducts([...products, []]);
    };

    const addNewProduct = (roomId, type) => {
        products[roomId].push({ type: type, toggle: false });
        setProducts([...products]);
    };

    const deleteRoom = (index) => {
        var temp = rooms;
        temp.splice(index, 1);
        setRooms([...temp]);

        temp = products;
        temp.splice(index, 1);
        setProducts([...products]);
    };

    const deleteProduct = (roomId, ProductId) => {
        products[roomId].splice(ProductId, 1);
        setProducts([...products]);
    };

    return (
        <div className='App'>
            <h1>Smart House</h1>
            <Provider value={addNewRoom}>
                <BrowserRouter>
                    <Link to='/'>
                        <button className='Exit'>✖</button>
                    </Link>
                    <Routes>
                        <Route path='/' element={<HomePage rooms={rooms} />} />
                        {rooms.map((v, i) => {
                            return (
                                <Route
                                    key={i}
                                    path={'/room-' + v.name}
                                    element={
                                        <Rooms
                                            room={rooms[i]}
                                            deleteRoom={deleteRoom}
                                            index={i}
                                            products={products[i]}
                                            addProduct={addNewProduct}
                                            deleteProduct={deleteProduct}
                                        />
                                    }
                                />
                            );
                        })}
                        <Route path='/addroom' element={<AddRoom />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
