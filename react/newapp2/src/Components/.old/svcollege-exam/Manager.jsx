import React, { useContext, useState } from 'react';
import Context from '../Context';

export default function Manager() {
    const { customers, setCustomers } = useContext(Context);
    const [showDetails, setShowDetails] = useState(-1);

    const deleteItem = (customerIndex, itemIndex) => {
        customers[customerIndex].spends.splice(itemIndex, 1);
        setCustomers([...customers]);
    };

    const deleteCustomer = (customerIndex) => {
        customers.splice(customerIndex, 1);
        setCustomers([...customers]);
    };

    return (
        <div className='Manager'>
            <h1>Manager</h1>
            {customers.map((v, i) => {
                return (
                    <div key={i} className='Details'>
                        {v.id} {v.fullname} <button onClick={() => setShowDetails(i)}>SHOW</button>
                        {showDetails === i ? (
                            <>
                                {v.spends.map((v, j) => {
                                    return (
                                        <div key={j} className='Details'>
                                            <div>{v.company}</div>
                                            <div>{v.amount}</div>
                                            <button onClick={() => deleteItem(i, j)}>X</button>
                                        </div>
                                    );
                                })}
                                <button onClick={() => deleteCustomer(i)}>Cancel</button>
                            </>
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
}
