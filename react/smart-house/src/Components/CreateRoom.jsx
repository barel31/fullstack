import './CreateRoom.css';
import React, { useState } from 'react';
import { Consumer } from '../ContextAPI.js';
import { useNavigate } from 'react-router-dom';

export default function AddRoom() {
    const [roomType, setRoomType] = useState('bedroom');
    const [roomName, setRoomName] = useState('');
    const [roomColor, setRoomColor] = useState('black');

    const nav = useNavigate();

    return (
        <div className='AddRoom'>
            <h2>Create a room</h2>

            <label htmlFor='rooms'>Room type: </label>
            <select name='rooms' onChange={(e) => setRoomType(e.target.value)}>
                <option value='bedroom'>Bedroom</option>
                <option value='bathroom'>Bathroom</option>
                <option value='kitchen'>Kitchen</option>
            </select>

            <input
                type='text'
                name='name'
                placeholder='Room name'
                maxLength='5'
                onChange={(e) => setRoomName(e.target.value)}
            />
            <label htmlFor='name'>Room color: </label>
            <input type='color' name='color' placeholder='Room color' onChange={(e) => setRoomColor(e.target.value)} />

            <Consumer>
                {(addNewRoom) => {
                    return (
                        <button
                            className='BtnCreate'
                            onClick={() => {
                                roomName.length
                                    ? addNewRoom(roomName, roomType, roomColor)
                                    : alert('You have to give a name to the room');
                                nav('/');
                            }}
                        >
                            Create
                        </button>
                    );
                }}
            </Consumer>
        </div>
    );
}
