import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage, { Signup, Login, Manager } from './Components/HomePage';
import Context from './Context';
import './App.css';

export default function App() {
    const [workers, setWorkers] = useState([]);
    const [products, setProducts] = useState([
        new Products(11122, 'Green Box', false),
        new Products(22554, 'Green Box', false),
        new Products(66698, 'Blue Box', true),
        new Products(78544, 'Red Box', false),
        new Products(69875, 'Red Box', false),
    ]);
    const [signUpFullname, setSignupFullname] = useState('');
    const [signUpId, setSignupId] = useState(0);
    const [signUpLicense, setSignupLicense] = useState(false);
    const [signupValidMsgs, setSignupValidMsgs] = useState([]);
    const [activeWorker, setActiveWorker] = useState(-1);

    const SignupBtnHandler = () => {
        let flag = true;

        if (signUpId < 10000 || signUpId > 99999) {
            validMsgsHandler(1);
            flag = false;
        }

        if (signUpFullname.length < 4) {
            validMsgsHandler(2);
            flag = false;
        } else {
            let space = false;
            for (let i = 0; i < signUpFullname.length; i++) {
                if (
                    (signUpFullname[i] >= 'a' && signUpFullname[i] <= 'z') ||
                    (signUpFullname[i] >= 'A' && signUpFullname[i] <= 'Z')
                ) {
                    continue;
                }
                if (signUpFullname[i] === ' ' && !space) {
                    space = true;
                    continue;
                }

                validMsgsHandler(2);
                flag = false;
                break;
            }
        }

        if (flag) {
            if (workers.find((v) => v.id === signUpId) === undefined) {
                setWorkers([...workers, new Worker(signUpId, signUpFullname, signUpLicense)]);
                return true;
            }
            return false;
        }
    };

    const validMsgsHandler = (n, add = true) => {
        // 1 : signup id
        // 2 : signup fullname
        if (add) {
            if (signupValidMsgs.includes(n)) return false;
            setSignupValidMsgs([...signupValidMsgs, n]);
            return true;
        }

        if (n === 1 && signupValidMsgs.includes(n)) {
            return (
                <>
                    <p className='InvalidMsgs'>the number must be with 5 digits.</p>
                </>
            );
        }
        if (n === 2 && signupValidMsgs.includes(n)) {
            return (
                <>
                    <p className='InvalidMsgs'>The name must contain mininmum 4 chracters.</p>
                </>
            );
        }
    };

    const loginHandler = () => {
        if (signUpId === 99999) {
            return true;
        }
        const worker = workers.findIndex((v) => v.id === signUpId);
        if (worker === -1) {
            alert(`Worker #${signUpId} does not exist`);
            return -1;
        }
        workers[worker].visits++;
        setWorkers([...workers]);

        setActiveWorker(workers[worker]);
        return workers[worker];
    };

    const updateProduct = (worker, productId) => {
        if (products[productId].forklift && !worker.license) {
            alert('Forklift license needed');
            return false;
        }

        const workerIndex = workers.findIndex((v) => v.id === worker.id);
        workers[workerIndex].counter++;
        setWorkers([...workers]);

        products[productId].inPlace = true;
        setProducts([...products]);
        return true;
    };

    return (
        <div className='App'>
            <Context.Provider
                value={{
                    workers,
                    setWorkers,
                    products,
                    setProducts,
                    setSignupId,
                    setSignupFullname,
                    setSignupLicense,
                    validMsgsHandler,
                    SignupBtnHandler,
                    loginHandler,
                    activeWorker,
                    setActiveWorker,
                    updateProduct,
                }}>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/manager' element={<Manager />} />
                </Routes>
            </Context.Provider>
        </div>
    );
}

class Worker {
    constructor(id, fullname, license) {
        this.id = id;
        this.fullname = fullname;
        this.license = license;
        this.visits = 0;
        this.counter = 0;
    }
}

class Products {
    constructor(id, name, forklift, inPlace = false) {
        this.id = id;
        this.name = name;
        this.forklift = forklift;
        this.inPlace = inPlace;
    }
}
