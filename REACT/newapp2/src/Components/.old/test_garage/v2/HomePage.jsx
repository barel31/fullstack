import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage(props) {
    const navigate = useNavigate();

    const [byId, setById] = useState(true);

    return (
        <div className='HomePage'>
            <h1>SV-Garage</h1>
            <button onClick={() => navigate('/new_customer')}>New Customer</button>
            <select
                onChange={(e) => {
                    navigate('/customer');
                    props.setActiveCustomer(e.target.value | 0);
                }}>
                    <option value="" hidden>Select by {byId ? 'ID' : 'Car'}</option>
                {props.customers.map((v, i) => {
                    return (
                        <option key={i} value={i}>
                            {byId ? v.id : v.car}
                        </option>
                    );
                })}
            </select>
            <div className='ByWhat'>
                <div>
                    <input type='radio' name='byWhat' id='byId' defaultChecked onChange={() => setById(true)} />
                    <label htmlFor='byId'>ID</label>
                </div>
                <div>
                    <input type='radio' name='byWhat' id='byCar' onChange={() => setById(false)} />
                    <label htmlFor='byId'>Car NO.</label>
                </div>
            </div>
        </div>
    );
}
