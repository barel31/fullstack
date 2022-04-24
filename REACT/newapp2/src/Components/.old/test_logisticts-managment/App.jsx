import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Manager from './Components/Manager';
import { useState } from 'react';

export default function App() {
    // Hooks
    const [products, setProducts] = useState([
        new Product(11122, 'Green Box', false),
        new Product(22554, 'Green Box', false),
        new Product(66698, 'Blue Box', true),
        new Product(78544, 'Red Box', false),
        new Product(69875, 'Red Box', false),
    ]);
    const [workers, setWorkers] = useState([new Worker(12345, 'barel shraga', true)]);

    const addWorker = (id, fullname, forklifter) => {
        setWorkers([...workers, new Worker(id, fullname, forklifter)]);
    };

    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route
                        path='/login'
                        element={
                            <Login
                                workers={workers}
                                products={products}
                                setProducts={setProducts}
                                setWorkers={setWorkers}
                            />
                        }
                    />
                    <Route
                        path='/signup'
                        element={<Signup workers={workers} setWorkers={setWorkers} addWorker={addWorker} />}
                    />
                    <Route path='/manager' element={<Manager workers={workers} setWorkers={setWorkers} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

class Worker {
    constructor(id, fullname, forkliftLicense, warehouseVisit = 0, jobsDone = 0) {
        this.id = id;
        this.fullname = fullname;
        this.forkliftLicense = forkliftLicense;
        this.warehouseVisit = warehouseVisit;
        this.jobsDone = jobsDone;
    }

    login() {
        this.warehouseVisit++;
    }

    done() {
        this.jobsDone++;
    }
}

class Product {
    constructor(id, name, needForklift, inPlace = false) {
        this.id = id;
        this.name = name;
        this.needForklift = needForklift;
        this.inPlace = inPlace;
    }
}
