import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Rooms.css';

export default function Rooms(props) {
    const [showProducts, setShowProducts] = useState(false);
    const [productType, setProductType] = useState('air-conditioner');
    const [refresh, setRefresh] = useState(false);
    const nav = useNavigate();

    const productsList = () => {
        if (showProducts) {
            return (
                <div className='AddProduct'>
                    <label htmlFor='products'>Choose product: </label>
                    <select name='products' onChange={(e) => {setProductType(e.target.value)}}>
                        <option value='air-conditioner'>Air-Conditioner</option>
                        <option value='boiler'>Boiler</option>
                        <option value='streo-system'>Streo-System</option>
                        <option value='lamp'>Lamp</option>
                    </select>
                    <button
                        className='AddBtn'
                        onClick={() => {
                            if (props.products.length >= 5) alert('You have reached the maximum products in this room');
                            else if (productType === 'boiler' && props.room.type !== 'bathroom')
                                alert('Boilder can be addded to Bathrooms only');
                            else if (productType === 'streo-system' && props.products.find((v) => v.type === productType))
                                alert('You can add up to one Streo-System in a room');
                            else {
                                setShowProducts(false);
                                setProductType('air-conditioner');
                                props.addProduct(props.index, productType);
                            }
                        }}
                    >
                        Add
                    </button>
                </div>
            );
        }
    };

    return (
        <div>
            <h2>{props.room.name}'s Room</h2>
            <h3>Room name: {props.room.name}</h3>
            <h3>Room type: {props.room.type}</h3>
            <div className='Products'>
                {props.products.map((v, i) => {
                    return (
                        <div key={i} className='Product'>
                            <button 
                                onClick={() => {
                                    props.products[i].toggle = !props.products[i].toggle;
                                    setRefresh(!refresh);
                                }}
                                style={{ backgroundColor: v.toggle ? 'green' : 'red' }}
                            >
                                {i + 1}. {v.type}
                            </button>
                            <button className='DeleteProductBtn' onClick={() => props.deleteProduct(props.index, i)}>✖</button>
                        </div>
                    );
                })}
            </div>
            {!showProducts ? (
                <button className='AddProductBtn' onClick={() => setShowProducts(!showProducts)}>
                    Add Product
                </button>
            ) : null}
            <button
                className='DeleteRoomBtn'
                onClick={() => {
                    props.deleteRoom(props.index);
                    nav('/');
                }}
            >
                Delete Room
            </button>
            {productsList()}
        </div>
    );
}
