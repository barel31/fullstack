import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';

export default function Customer() {
    const nav = useNavigate();

    const { customers, setActiveCustomer, activeCustomer, addSpend } = useContext(Context);
    const [action, setAction] = useState(false);
    const [amount, setAmount] = useState(0);
    const [company, setCompany] = useState('');

    return (
        <div className='Customer'>
            <h1>
                Welcome <br />
                {customers[activeCustomer].fullname}
            </h1>
            <div>
                <button onClick={() => alert(customers[activeCustomer].money)}>BALANCE</button>
                <button onClick={() => setAction(!action)}>ACTION</button>
            </div>
            <div>
                <button
                    onClick={() => {
                        setActiveCustomer(-1);
                        nav('/');
                    }}>
                    EXIT
                </button>
                <button onClick={() => nav('/Edit')}>EDIT</button>
            </div>
            {action ? (
                <>
                    <div className='Action'>
                        <input
                            type='number'
                            placeholder='Amount'
                            onChange={(e) => setAmount(parseInt(e.target.value))}
                        />
                        <input type='text' placeholder='Company' onChange={(e) => setCompany(e.target.value)} />
                        <button onClick={() => addSpend(amount, company)}>Confirm</button>
                    </div>
                </>
            ) : null}
        </div>
    );
}
