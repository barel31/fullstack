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
                        <button
                            key={i}
                            className='Room custom-btn btn-4'
                            style={{ backgroundColor: v.color }}
                            onClick={() => nav('/room-' + v.name)}
                        >
                            <span>
                                <h3>{v.name}</h3>
                                <span className='RoomTypeText'>{v.type}</span>
                            </span>
                        </button>
                    );
                })}
            </div>
            {/* <button className="custom-btn custom-btn-relative btn-16">test</button> */}
            <Link to='/addroom'>
                <button className='AddRoomBtn'>+</button>
            </Link>
        </div>
    );
}
