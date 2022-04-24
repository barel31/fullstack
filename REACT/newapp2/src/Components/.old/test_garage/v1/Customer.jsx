import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const pageFaults = false;
const pageDetails = true;

export default function Customer(props) {
    const navigate = useNavigate();
    // Hooks
    const [page, setPage] = useState(pageFaults);
    const [searchFault, setSearchFault] = useState('');
    const [searchResult, setSearchResult] = useState();
    const [showFaultDesc, setShowFaultDesc] = useState(false);

    const findSearchedFault = () => {
        const result = props.faults.find((v) => v.code === (searchFault | 0));
        if (result === undefined) {
            alert('No code fault found');
            setSearchResult(false);
        } else {
            setSearchResult(result);
        }
    };

    // const o1 = { id: 123456789, str: 'abcd' };
    // const o2 = { id: 123456789, str: 'dacb' };
    // const anagram = (obj1, obj2) => {
    //     o1.str = o1.str.split('').sort().join('');
    //     o2.str = o2.str.split('').sort().join('');

    //     console.log(o1.str);
    //     console.log(o2.str);
    //     try {
    //         if (!o1.hasOwnProperty('id') || !o2.hasOwnProperty('id')) throw 'no id property';
    //         for (let i = 0, j = obj1.str.length - 1; i < obj1.str.length; i++, j--) {
    //             if (obj1.str[i] !== obj2.str[i]) {
    //                 console.log(`${obj1.str[i]} !== ${obj2.str[i]}`);
    //                 return false;
    //             }
    //         }
    //         return true;
    //     } catch (e) {
    //         throw e;
    //     }
    // };
    // console.log(anagram(o1, o2));

    const pageHandler = () => {
        var totalCost = 0,
            totalTime = 0;
        return page === pageFaults ? (
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
                            totalCost += v.cost;
                            totalTime += v.time;
                            return (
                                <tr key={i}>
                                    <td>{v.code}</td>
                                    <td>{v.cost}₪</td>
                                    <td>{v.time}h</td>
                                </tr>
                                // sum of costs
                                // sum of time in days (9 hours count as day)
                            );
                        })}
                        <tr className='LastRow'>
                            <td>Totals:</td>
                            <td>{totalCost}₪</td>
                            <td>{`${Math.floor(totalTime / 9)}d ${totalTime % 9}h`}</td>
                        </tr>
                    </tbody>
                </table>
            </>
        ) : (
            <>
                <p>
                    Name: {props.customer.fullname}
                    <br />
                    ID: {props.customer.id}
                    <br />
                    Address: {props.customer.address}
                    <br />
                    Phone Number: {props.customer.phoneNumber}
                    <br />
                    Car Number: {props.customer.carNumber}
                </p>
            </>
        );
    };

    return (
        <div className='Customer'>
            <div className='Top'>
                <div className='History' onClick={() => setPage(pageFaults)}>
                    <h3>History</h3>
                </div>
                <hr />
                <div className='CustomerDetails' onClick={() => setPage(pageDetails)}>
                    <h3>Customer details</h3>
                </div>
            </div>
            <div className='CustomerContent'>{pageHandler()}</div>
            <div className='UnderContent'>
                <input
                    type='text'
                    name='search'
                    placeholder='Fault code'
                    onChange={(e) => setSearchFault(e.target.value)}
                />
                <button onClick={() => findSearchedFault()}>Insert</button>
            </div>
            {showFaultDesc ? (
                <div className='FaultDesc' onClick={() => setShowFaultDesc(false)}>
                    {showFaultDesc}
                </div>
            ) : null}
            {searchResult ? (
                <>
                    <button onClick={() => setShowFaultDesc(searchResult.description)}>Show Fault Details</button>
                    <button
                        onClick={() => {
                            props.addFaultToCustomer(searchResult);
                        }}
                    >
                        Add Fault
                    </button>
                </>
            ) : null}
            <div>
                <button onClick={() => navigate('/')}>Go back to home page</button>
            </div>
        </div>
    );
}
