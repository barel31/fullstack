import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewCustomer(props) {
    const navigate = useNavigate();

    // Hooks
    const [fullname, setFullname] = useState('');
    const [id, setId] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [carNumber, setCarNumber] = useState('');

    const [invalids, setInvalids] = useState([]);

    const addCustomer = () => {
        // inputs validations
        if (fullname === '' || !/^[a-zA-Z ]+$/.test(fullname)) {
            setInvalids([...invalids, 1]);
        } else if (id === '' || !/^[0-9]+$/.test(id)) {
            setInvalids([...invalids, 2]);
        } else if (phoneNumber === '' || !/^[0-9]+$/.test(phoneNumber) || phoneNumber.length < 7) {
            setInvalids([...invalids, 4]);
        } else if (carNumber === '' || !/^[0-9]+$/.test(carNumber)) {
            setInvalids([...invalids, 5]);
        } else {
            // remove invalids messages
            setInvalids([]);
            // add customer to array
            props.setCustomers([
                ...props.customers,
                {
                    fullname: fullname,
                    id: id,
                    address: address,
                    phoneNumber: phoneNumber,
                    carNumber: carNumber,
                    history: [],
                },
            ]);
            navigate('/');
        }
    };

    const invalidMessage = (i) => {
        const res = invalids.includes(i) ? 'not valid' : null;
        if (res !== null) invalids.pop();
        return res;
    };

    return (
        <div className='NewCustomer'>
            <h1>New Customer</h1>
            <input type='text' name='fullName' placeholder='Full name' onChange={(e) => setFullname(e.target.value)} />
            {invalidMessage(1)}
            <input type='number' name='id' placeholder='ID' onChange={(e) => setId(e.target.value)} />
            {invalidMessage(2)}
            <input type='text' name='address' placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
            {invalidMessage(3)}
            <input
                type='number'
                name='phoneNumber'
                placeholder='phoneNumber'
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {invalidMessage(4)}
            <input
                type='number'
                name='carNumber'
                placeholder='carNumber'
                onChange={(e) => setCarNumber(e.target.value)}
            />
            {invalidMessage(5)}
            <button onClick={() => addCustomer()}>Submit</button>
        </div>
    );
}
