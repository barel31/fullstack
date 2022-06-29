import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Customer(props) {
    const navigate = useNavigate();

    const [faultCode, setFaultCode] = useState();
    const [isDetailsPage, setIsDetailsPage] = useState(true);
    const [foundFaultCodeIndex, setfoundFaultCodeIndex] = useState(-1);
    const [showFaultDesc, setShowFaultDesc] = useState(false);

    const insertBtnHandler = () => {
        const foundIndex = props.faults.findIndex((v) => v.code === (faultCode | 0));
        if (foundIndex !== -1) setfoundFaultCodeIndex(foundIndex);
        else {
            setfoundFaultCodeIndex(-1);
            setShowFaultDesc(false);
            alert(`Fault code ${faultCode} not exists`);
        }
    };

    const historyHandler = () => {
        let sum = 0,
            time = 0;
        return props.customer.history.length ? (
            <>
                <table>
                    <thead>
                        <tr>
                            <td>Fault Code</td>
                            <td>Cost</td>
                            <td>Time</td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.customer.history.map((v, i) => {
                            sum += v.cost;
                            time += v.time;
                            return (
                                <tr key={i}>
                                    <td>{v.code}</td>
                                    <td>{v.cost}$</td>
                                    <td>{v.time}h</td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td>Total:</td>
                            <td>{sum}$</td>
                            <td>{`${Math.floor(time / 9)}d ${time % 9}h`}</td>
                        </tr>
                    </tbody>
                </table>
            </>
        ) : (
            <p>No faults found</p>
        );
    };

    const detailsHandler = () => {
        return (
            <>
                <p>Fullname: {props.customer.fullname}</p>
                <p>ID: {props.customer.id}</p>
                <p>Address: {props.customer.address}</p>
                <p>Phone: {props.customer.phone}</p>
                <p>Car Number: {props.customer.car}</p>
            </>
        );
    };

    const foundFaultCodeHandler = () => {
        return (
            <>
                <button style={{ display: showFaultDesc ? 'none' : 'inline' }} onClick={() => setShowFaultDesc(true)}>
                    Show Faults Details
                </button>
                <button
                    style={{ display: showFaultDesc ? 'block' : 'inline' }}
                    onClick={() => props.addFaultToCustomer(props.activeCustomer, foundFaultCodeIndex)}>
                    Add Fault To Customer
                </button>
            </>
        );
    };

    const showFaultDescHandler = () => {
        return (
            <>
                <div className='FoundFaultCode' onClick={() => setShowFaultDesc(false)}>
                    {props.faults[foundFaultCodeIndex].desc}
                </div>
            </>
        );
    };

    return (
        <div className='Customer'>
            <div className='Pages'>
                <div className='History' onClick={() => setIsDetailsPage(false)}>
                    <h3>History</h3>
                </div>
                <div className='Details' onClick={() => setIsDetailsPage(true)}>
                    <h3>Customer Details</h3>
                </div>
            </div>
            <div className='Content'>
                {isDetailsPage ? detailsHandler() : historyHandler()}
                {showFaultDesc ? showFaultDescHandler() : null}
                {foundFaultCodeIndex !== -1 ? foundFaultCodeHandler() : null}
                <input type='number' placeholder='Fault Code' onChange={(e) => setFaultCode(e.target.value)} />
                <button onClick={() => insertBtnHandler()}>Insert</button>
            </div>
            <button onClick={() => navigate('/')}>Back to Home Page</button>
        </div>
    );
}
