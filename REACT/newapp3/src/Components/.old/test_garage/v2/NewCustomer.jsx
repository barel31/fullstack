import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewCustomer(props) {
    const navigate = useNavigate();

    const [fullname, setFullname] = useState('');
    const [id, setId] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [car, setCar] = useState('');
    const [invalidMsgs, setInvalidMsgs] = useState([]);

    const sumbitBtnHandler = () => {
        let flag = true;

        const addMsg = (i) => {
            if (!invalidMsgs.includes(i)) {
                invalidMsgs.push(i);
                setInvalidMsgs([...invalidMsgs]);
            }
            flag = false;
        };

        const removeMsg = (i) => {
            if (invalidMsgs.includes(i)) {
                const index = invalidMsgs.indexOf(i);
                invalidMsgs.splice(index, 1);
                setInvalidMsgs([...invalidMsgs]);
            }
        };

        if (!fullname.length) addMsg(1);
        else removeMsg(1);
        if (id.length !== 9 || id != Number(id)) addMsg(2);
        else removeMsg(2);
        if (!address.length) addMsg(3);
        else removeMsg(3);
        if (phone.length < 7 || Number(phone) != phone) addMsg(4);
        else removeMsg(4);
        if (Number(car) < 1) addMsg(5);
        else removeMsg(5);

        if (flag) {
            props.addCustomer(fullname, id, address, phone, car);
            navigate('/');
        }
    };

    const invalidMsgsHandler = (i) => {
        if (invalidMsgs.includes(i)) return <p style={{ color: 'red', margin: 0 }}>Invalid input</p>;
    };

    return (
        <div className='NewCustomer'>
            <h1>New Customer</h1>
            <input type='text' name='fullname' placeholder='Fullname' onChange={(e) => setFullname(e.target.value)} />
            {invalidMsgsHandler(1)}
            <input type='number' placeholder='ID' onChange={(e) => setId(e.target.value)} />
            {invalidMsgsHandler(2)}
            <input type='text' placeholder='Address' onChange={(e) => setAddress(e.target.value)} />
            {invalidMsgsHandler(3)}
            <input type='number' placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)} />
            {invalidMsgsHandler(4)}
            <input type='number' placeholder='Car Number' onChange={(e) => setCar(e.target.value)} />
            {invalidMsgsHandler(5)}
            <button onClick={() => sumbitBtnHandler()}>Submit</button>
        </div>
    );
}
