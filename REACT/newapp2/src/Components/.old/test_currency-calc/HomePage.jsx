import { useState } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

export default function App(props) {
    // Hooks
    const [currencyTypeFrom, setCurrencyTypeFrom] = useState('USD');
    const [currencyTypeTo, setCurrencyTypeTo] = useState('USD');
    const [number, setNumber] = useState(0);
    const [history, setHistory] = useState([]);
    const [showList, setShowList] = useState(false);

    const alertHandler = () => {
        const from = props.currencyList.find((v) => v.type === currencyTypeFrom);
        const to = props.currencyList.find((v) => v.type === currencyTypeTo);
        const multi = from.value / to.value;
        const result = multi * number;

        alert(`${result} ILS`);

        setHistory([...history, { from: from.name, to: to.name, amount: number, result: result }]);
    };

    const removeFromHistory = (index) => {
        history.splice(index, 1);
        setHistory([...history]);
    };

    const ListHandler = () => {
        return (
            <>
                {history.map((v, i) => {
                    return (
                        <div key={i} className='ListItem'>
                            <p>#{i + 1}</p>
                            <p>
                                From {v.from} To {v.to}
                            </p>
                            <p>
                                {v.amount} = {v.result}
                            </p>
                            <button onClick={() => removeFromHistory(i)}>X</button>
                        </div>
                    );
                })}
            </>
        );
    };

    return (
        <div className='App'>
            <h1>Exchange</h1>

            <div className='FlexTop'>
                <label htmlFor='currencyFrom'>From: </label>
                <select name='currencyFrom' id='currencyFrom' onChange={(e) => setCurrencyTypeFrom(e.target.value)}>
                    {props.currencyList.map((v, i) => {
                        return (
                            <option key={i} value={v.type}>
                                {v.type}
                            </option>
                        );
                    })}
                </select>
                <input type='number' name='number' onChange={(e) => setNumber(e.target.value)} />
            </div>

            <div className='FlexMiddle'>
                <label htmlFor='currencyTo'>To: </label>
                <select name='currencyTo' id='currencyTo' onChange={(e) => setCurrencyTypeTo(e.target.value)}>
                    {props.currencyList.map((v, i) => {
                        return (
                            <option key={i} value={v.type}>
                                {v.type}
                            </option>
                        );
                    })}
                </select>
                <button onClick={() => alertHandler()}>START</button>
            </div>

            <div className='FlexBottom'>
                <Link to='/update'>
                    <button>Update</button>
                </Link>
                <a href='http://www.facebook.com/'>
                    <button>Share on Facebook</button>
                </a>
                <button onClick={() => setShowList(!showList)}>View your exchange list</button>
            </div>

            {showList ? ListHandler() : null}
        </div>
    );
}
