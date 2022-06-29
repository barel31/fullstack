import React, { useState } from 'react';
import './Update.css';
import { Link } from 'react-router-dom';

export default function Update(props) {
    const [type, setType] = useState();
    const [value, setValue] = useState();
    const [refresh, setRefresh] = useState();

    const update = () => {
        if (!props.updateCurrency(type, value)) {
            alert('No currency has found with type ' + type);
        } else setRefresh(!refresh);
    };

    return (
        <div className='Update'>
            <h1>Update</h1>
            <div className='Table'>
                <table>
                    <thead>
                        <tr>
                            <td>TYPE</td>
                            <td>VALUE</td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.currencyList.map((v, i) => {
                            return (
                                <tr key={i}>
                                    <td>{v.type}</td>
                                    <td>{v.value}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className='Inputs'>
                <div>
                    <label htmlFor='type'>Type </label>
                    <input id='type' type='text' onChange={(e) => setType(e.target.value)} />
                </div>
                <div>
                    <label htmlFor='value'>Value </label>
                    <input id='value ' type='number' onChange={(e) => setValue(e.target.value)} />
                </div>
            </div>
            <Link to='/'>
                <button>Back</button>
            </Link>
            <button onClick={() => update()}>Update</button>
        </div>
    );
}
