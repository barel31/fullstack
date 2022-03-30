import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Room.css';

export default function Room(props) {
    const [showProducts, setShowProducts] = useState(false);
    const [productType, setProductType] = useState('Air-Conditioner');
    const [refresh, setRefresh] = useState(false);
    const nav = useNavigate();

    const productsList = () => {
        if (showProducts) {
            return (
                <div className='AddProduct'>
                    <label htmlFor='products'>Choose product: </label>
                    <select
                        name='products'
                        onChange={(e) => {
                            setProductType(e.target.value);
                        }}
                    >
                        <option value='Air-Conditioner'>Air-Conditioner</option>
                        <option value='Boiler'>Boiler</option>
                        <option value='Streo-System'>Streo-System</option>
                        <option value='Lamp'>Lamp</option>
                    </select>
                    <button
                        className='AddBtn'
                        onClick={() => {
                            if (props.products.length >= 5) alert('You have reached the maximum products in this room');
                            else if (productType === 'Boiler' && props.room.type !== 'bathroom')
                                alert('Boilder can be addded to Bathrooms only');
                            else if (
                                productType === 'Streo-System' &&
                                props.products.find((v) => v.type === productType)
                            )
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
        <div style={{ backgroundColor: props.room.color }}>
            <h2>
                {props.room.name}'s Room{' '}
                <input
                    type='color'
                    name='color'
                    value={props.room.color}
                    placeholder='Change room color'
                    onChange={(e) => props.editRoom(props.index, 'color', e.target.value)}
                />
            </h2>
            <h3>
                Room name: {props.room.name}{' '}
                <button
                    onClick={() => {
                        const name = prompt('Please choose a new name to the room:');
                        if (name && props.editRoom(props.index, 'name', name)) {
                            nav('/room-' + name);
                        }
                    }}
                >
                    {'\u270E'}
                </button>
            </h3>
            <h3>
                Room type: {props.room.type}{' '}
                <button
                    onClick={() => {
                        const type = prompt(
                            'Please choose type for the room:\n( Bedroom | Bathroom | Kitchen | Living Room )'
                        );
                        if (type) props.editRoom(props.index, 'type', type);
                    }}
                >
                    {'\u270E'}
                </button>
            </h3>
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
                            <button
                                className='DeleteProductBtn custom-btn btn-7'
                                onClick={() => {
                                    if (window.confirm('Are you sure you want to delete this product?'))
                                        props.deleteProduct(props.index, i);
                                }}
                            >
                                ✖
                            </button>
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
                    if (window.confirm('Are you sure you want to delete this room?')) {
                        props.deleteRoom(props.index);
                        nav('/');
                    }
                }}
            >
                Delete Room
            </button>
            {productsList()}
        </div>
    );
}
