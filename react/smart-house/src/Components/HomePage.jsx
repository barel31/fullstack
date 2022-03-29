import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';

export default function HomePage(props) {
    const nav = useNavigate();

    return (
        <div className='HomePage'>
            <div className='Rooms'>
                {props.rooms.map((v, i) => {
                    return (
                        <button key={i} className='Room' style={{ backgroundColor: v.color }} onClick={() => nav('/room-' + v.name)}>
                            {v.name}
                        </button>
                    );
                })}
            </div>
            <Link to='/addroom'>
                <button className='AddRoomBtn'>+</button>
            </Link>
        </div>
    );
}
