import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Register from './Components/Register';
import Customer from './Components/Customer';
import Manager from './Components/Manager';
import Context from './Context';
import './App.css';

export default function App() {
    // id, fullname, password, money, spends {company, amount}
    const [customers, setCustomers] = useState([
        {
            id: 123123123,
            fullname: 'aaaa',
            password: '123123',
            money: 10,
            spends: [
                { amount: 10, company: 'a' },
                { amount: 20, company: 'b' },
            ],
        },
        { id: 111222333, fullname: 'bbbb', password: '123123', money: 10, spends: [] },
        { id: 999999999, fullname: 'cccc', password: '123123', money: 20, spends: [] },
    ]);
    const [activeCustomer, setActiveCustomer] = useState(-1);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [id, setId] = useState(0);
    const [money, setMoney] = useState(-1);

    const validUser = () => {
        if (password === 'ADMIN' && userName === 'ADMIN') {
            return 1;
        }
        const find = customers.findIndex((v) => v.fullname === userName);
        if (find !== -1) {
            if (customers[find].password === password) {
                setActiveCustomer(find);
                return 2;
            }
        }
        return -1;
    };
    const register = (edit = false) => {
        if (id > 999999999 || id < 100000000) alert('id must to be 9 digits long');
        else if (userName.length < 4) alert('username must to be atleast 4 chars long');
        else if (password.length < 6) alert('password must to be atleast 6 chars long');
        else if (password !== passwordConfirm) alert('password don`t match');
        else if (money < 0 || money > 1000000) alert('money have to between 0 - 1000000');
        else {
            const data = {
                id: id,
                fullname: userName,
                password: password,
                money: money,
                spends: edit ? [...customers[activeCustomer].spends] : [],
            };
            if (edit) {
                customers[activeCustomer] = data;
                setCustomers([...customers]);
                return true;
            }

            setCustomers([...customers, data]);
            setActiveCustomer(customers.length);

            return true;
        }
        return false;
    };

    const addSpend = (amount, company) => {
        customers[activeCustomer].spends.push({ company: company, amount: amount });
        setCustomers([...customers]);
    };

    return (
        <div className='App'>
            <Context.Provider
                value={{
                    register,
                    setPasswordConfirm,
                    money,
                    setMoney,
                    id,
                    setId,
                    customers,
                    setCustomers,
                    userName,
                    setUserName,
                    password,
                    setPassword,
                    validUser,
                    setActiveCustomer,
                    activeCustomer,
                    addSpend,
                }}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/register' element={<Register />} />
                    {customers.map((v, i) => {
                        return <Route key={i} path={`/${v.fullname}`} element={<Customer />} />;
                    })}
                    <Route path='/Edit' element={<Register edit={true} />} />;
                    <Route path='/Admin' element={<Manager />} />;
                </Routes>
            </Context.Provider>
        </div>
    );
}
