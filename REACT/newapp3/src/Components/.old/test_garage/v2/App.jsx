import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import NewCustomer from './Components/NewCustomer';
import Customer from './Components/Customer';

export default function App() {
    const [customers, setCustomers] = useState([
        { fullname: 'barel shraga', id: 12345, address: 'tel aviv', phone: 525326654, car: 123456789, history: [] },
    ]);
    const [faults, setFaults] = useState([{ code: 1000, desc: 'fault 1000 info here', time: 1, cost: 50 }]);
    const [activeCustomer, setActiveCustomer] = useState(0);

    const addCustomer = (fullname, id, address, phone, car) => {
        setCustomers([...customers, { fullname: fullname, id: id, address: address, phone: phone, car: car, history: [] }]);
    };

    const addFaultToCustomer = (customerIndex, faultIndex) => {
        customers[customerIndex].history.push(faults[faultIndex]);
        setCustomers([...customers]);
    };

    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={<HomePage customers={customers} setActiveCustomer={setActiveCustomer} />}
                    />
                    <Route path='/new_customer' element={<NewCustomer addCustomer={addCustomer} />} />
                    <Route
                        path='/customer'
                        element={
                            <Customer
                                customer={customers[activeCustomer]}
                                faults={faults}
                                addFaultToCustomer={addFaultToCustomer}
                                activeCustomer={activeCustomer}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
