import { useNavigate } from 'react-router-dom';

const byCarNumber = false;
const byId = true;

export default function App(props) {
    const navigate = useNavigate();

    return (
        <div className='HomePage'>
            <h1>SV-Garage</h1>
            <button className='NewCustomerBtn' onClick={() => navigate('/new_customer')}>
                New customer
            </button>
            <select
                name='customers'
                id='customers'
                onChange={(e) => {
                    props.setActiveCustomer(e.target.value);
                    navigate('/customer');
                }}
            >
                <option value='' hidden>
                    {props.customerBy ? 'ID' : 'Car Number'} of exist customer
                </option>
                {props.customers.map((v, i) => {
                    return (
                        <option key={i} value={i}>
                            {props.customerBy ? v.id : v.carNumber}
                        </option>
                    );
                })}
            </select>
            <div className='Radio'>
                <div>
                    <input
                        type='radio'
                        name='customerBy'
                        id='customerById'
                        value='ID'
                        defaultChecked
                        onClick={() => props.setCustomerBy(byId)}
                    />
                    <br />
                    <label htmlFor='customerBy'>ID</label>
                </div>
                <div>
                    <input
                        type='radio'
                        name='customerBy'
                        id='customerByCarNumber'
                        value='Car number'
                        onClick={() => props.setCustomerBy(byCarNumber)}
                    />
                    <br />
                    <label htmlFor='customerBy'>Car number</label>
                </div>
            </div>
        </div>
    );
}
