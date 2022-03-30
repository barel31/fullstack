import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from './ContextAPI.js';
import CreateRoom from './Components/CreateRoom';
import Room from './Components/Room';
import HomePage from './Components/HomePage';

function App() {
    const [rooms, setRooms] = useState([]);
    const [products, setProducts] = useState([[]]);

    const addNewRoom = (name, type, color) => {
        if (rooms.find((room) => room.name === name) !== undefined) {
            alert('You already have a room with this name. Please choose another name.');
        } else {
            setRooms([...rooms, { name: name, type: type, color: color }]);
            setProducts([...products, []]);
        }
    };

    const addNewProduct = (roomId, type) => {
        products[roomId].push({ type: type, toggle: false });
        setProducts([...products]);
    };

    const deleteRoom = (index) => {
        rooms.splice(index, 1);
        setRooms([...rooms]);

        products.splice(index, 1);
        setProducts([...products]);
    };

    const deleteProduct = (roomId, ProductId) => {
        products[roomId].splice(ProductId, 1);
        setProducts([...products]);
    };

    const editRoom = (roomId, key, value) => {
        if (key === 'name' && rooms.find((room) => room.name === value) !== undefined) {
            alert('You already have a room with this name. Please choose another name.');
            return false;
        }
        rooms[roomId][key] = value;
        setRooms([...rooms]);
        return true;
    };

    return (
        <div className='App'>
            <h1>Smart House</h1>
            <Provider value={addNewRoom}>
                <BrowserRouter>
                    <Link to='/'>
                        <button className='Exit custom-btn btn-7'>
                            <span>X</span>
                        </button>
                    </Link>
                    <Routes>
                        <Route path='/' element={<HomePage rooms={rooms} />} />
                        {rooms.map((v, i) => {
                            return (
                                <Route
                                    key={i}
                                    path={'/room-' + v.name}
                                    element={
                                        <Room
                                            room={rooms[i]}
                                            deleteRoom={deleteRoom}
                                            index={i}
                                            products={products[i]}
                                            addProduct={addNewProduct}
                                            deleteProduct={deleteProduct}
                                            editRoom={editRoom}
                                        />
                                    }
                                />
                            );
                        })}
                        <Route path='/addroom' element={<CreateRoom />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
