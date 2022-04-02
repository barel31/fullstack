import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from './ContextAPI.js';
import CreateRoom from './Components/CreateRoom';
import Room from './Components/Room';
import HomePage from './Components/HomePage';

function App() {
    // rooms is an array with objects inside
    // with the properties of name, type, color and products.
    // The index of the array is represents the ID of the rooms.
    // products - a nested array contain arrays of objects with the keys type and status of False/True.
    const [rooms, setRooms] = useState([]);

    const addNewRoom = (name, type, color) => {
        if (rooms.find((room) => room.name === name) !== undefined) {
            alert('You already have a room with this name. Please choose another name.');
        } else {
            setRooms([...rooms, { name: name, type: type, color: color, products: [] }]);
        }
    };

    const addNewProduct = (roomId, type) => {
        rooms[roomId].products.push({ type: type, status: false });
        setRooms([...rooms]);
    };

    const deleteRoom = (index) => {
        rooms.splice(index, 1);
        setRooms([...rooms]);
    };

    const deleteProduct = (roomId, ProductId) => {
        rooms[roomId].products.splice(ProductId, 1);
        setRooms([...rooms]);
    };

    const editRoom = (roomId, key, value) => {
        if (key === 'name' && rooms.find((room) => room.name === value) !== undefined) {
            alert(`You already have a room with the name ${value}. Please choose another name.`);
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
                                            products={rooms[i].products}
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
