import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';

export default function HomePage(props) {
    const nav = useNavigate();
    const {
        customers,
        activeCustomer,
        setMoney,
        setUserName,
        userName,
        setPassword,
        setId,
        setPasswordConfirm,
        register,
    } = useContext(Context);

    const edit = props.edit;
    const customer = customers[activeCustomer];

    useEffect(() => {
        if (edit !== undefined) {
            setId(customers[activeCustomer].id);
            setUserName(customers[activeCustomer].fullname);
            setPassword(customers[activeCustomer].password);
            setPasswordConfirm(customers[activeCustomer].password);
            setMoney(customers[activeCustomer].money);
        } else {
            setId(0);
            setUserName('');
            setPassword('');
            setPasswordConfirm('');
            setMoney(0);
        }
    }, []);

    return (
        <div className='Register'>
            <h1>REGISTER</h1>
            <input
                defaultValue={edit ? customer.id : ''}
                type='number'
                placeholder='ID'
                onChange={(e) => setId(parseInt(e.target.value))}
            />
            <input
                defaultValue={edit ? customer.fullname : ''}
                type='text'
                placeholder='User Name'
                onChange={(e) => setUserName(e.target.value)}
                minLength='4'
            />
            <input
                defaultValue={edit ? customer.password : ''}
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                minLength='6'
            />
            <input
                defaultValue={edit ? customer.password : ''}
                type='password'
                placeholder='Confirm Pass'
                onChange={(e) => setPasswordConfirm(e.target.value)}
                minLength='6'
            />
            <input
                defaultValue={edit ? customer.money : ''}
                type='number'
                placeholder='Money'
                onChange={(e) => setMoney(parseInt(e.target.value))}
                minLength='6'
            />
            <button onClick={() => (register(edit !== undefined) ? nav(`/${userName}`) : null)}>
                {edit !== undefined ? 'Edit' : 'Create'}
            </button>
        </div>
    );
}
