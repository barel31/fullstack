import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Update from './Components/Update';
import './App.css';

export default function App() {
    // Currency list
    const currencyList = [
        { name: 'Dollar', type: 'USD', value: 4 },
        { name: 'Shekel', type: 'ILS', value: 1 },
        { name: 'Euro', type: 'EUR', value: 5 },
    ];
    for (let i = 0; i < currencyList.length; i++) {
        currencyList[i] = new Currency(currencyList[i].name, currencyList[i].type, currencyList[i].value);
    }

    const updateCurrency = (type, value) => {
        const currencyIndex = currencyList.findIndex((v) => v.type === type);
        if (currencyIndex === -1) return false;
        else {
            currencyList[currencyIndex].value = value;
            return true;
        }
    };
    const fibo = (a, b, n) => {
        let z;
        for (var counter = 2; counter <= n; counter++) {
            if (z === n) break;
            a += !a ? 1 : 0;
            z = a + b;
            a = b;
            b = z;
        }
        return counter;
    };
    console.log(fibo(1, 2, 21));

    return (
        <div className='App'>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<HomePage currencyList={currencyList} />} />
                    <Route
                        path='/update'
                        element={<Update currencyList={currencyList} updateCurrency={updateCurrency} />}
                    />
                </Routes>
            </HashRouter>
        </div>
    );
}

class Currency {
    constructor(name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
}
