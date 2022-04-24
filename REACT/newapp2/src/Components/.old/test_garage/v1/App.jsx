import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import NewCustomer from './Components/NewCustomer';
import Customer from './Components/Customer';

// For customerBy
const byCarNumber = false;
const byId = true;

export default function App() {
    // Hooks
    const [customers, setCustomers] = useState([
        { fullname: 'barel shraga', id: '124124', address: 'tel aviv', phoneNumber: '521234567', carNumber: '82944258', history: [] },
    ]); // fullname id address phoneNumber carNumber history[]
    const [faults, setFaults] = useState([
        // code description time cost
        { code: 1, description: 'description 1', time: 1, cost: 50 },
        { code: 2, description: 'description 2', time: 3, cost: 100 },
        { code: 3, description: 'description 3', time: 5, cost: 300 },
    ]);
    const [customerBy, setCustomerBy] = useState(byId);
    const [activeCustomer, setActiveCustomer] = useState(0);

    const addFaultToCustomer = (code) => {
        customers[activeCustomer].history.push(code);
        setCustomers([...customers]);
    };

    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <HomePage
                                customers={customers}
                                setCustomerBy={setCustomerBy}
                                customerBy={customerBy}
                                setActiveCustomer={setActiveCustomer}
                            />
                        }
                    />
                    <Route
                        path='/new_customer'
                        element={<NewCustomer setCustomers={setCustomers} customers={customers} />}
                    />
                    <Route
                        path='/customer'
                        element={
                            <Customer
                                faults={faults}
                                customer={customers[activeCustomer]}
                                addFaultToCustomer={addFaultToCustomer}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
