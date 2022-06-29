import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
    const navigate = useNavigate();

    // Hooks
    const [id, setId] = useState(0);
    const [fullname, setFullname] = useState('');
    const [forklifter, setForklifter] = useState(false);
    const [invalidMsgs, setInvalidMsgs] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const btnCreateHandle = () => {
        let flag = false;

        // validate id
        const _id = Number(id);
        if (_id < 10000 || _id > 99999) {
            if (!invalidMsgs.includes(1)) setInvalidMsgs([...invalidMsgs, 1]);
            flag = true;
        } else {
            const index = invalidMsgs.findIndex((v) => v === 1);
            if (index !== -1) {
                invalidMsgs.splice(index, 1);
                setInvalidMsgs(invalidMsgs);
                setRefresh(!refresh);
            }
        }
        // validate fullname
        if (fullname.trim().length < 4 || !/^[a-zA-Z ]+$/.test(fullname)) {
            if (!invalidMsgs.includes(2)) setInvalidMsgs([...invalidMsgs, 2]);
            flag = true;
        } else {
            const index = invalidMsgs.findIndex((v) => v === 2);
            if (index !== -1) {
                invalidMsgs.splice(index, 1);
                setInvalidMsgs(invalidMsgs);
                setRefresh(!refresh);
            }
        }

        if (!flag) {
            if (!props.workers.find((v) => v.id === _id)) {
                props.addWorker(_id, fullname, forklifter);
                navigate('/');
            }
        }
    };

    const invalidMsgsHandle = (n) => {
        if (n === 1 && invalidMsgs.includes(n)) {
            return <p style={{ margin: 0, color: 'red' }}>The number must to be with 5 digits.</p>;
        } else if (n === 2 && invalidMsgs.includes(n)) {
            return <p style={{ margin: 0, color: 'red' }}>The name must contain minimum 4 characters.</p>;
        }
    };

    return (
        <div className='SignUp'>
            <h1>Sign up</h1>
            <div className='Inputs'>
                <label htmlFor='id'>NO. </label>
                <input type='number' name='id' id='id' maxLength='5' onChange={(e) => setId(e.target.value)} />
            </div>
            {invalidMsgsHandle(1)}
            <div className='Inputs'>
                <label htmlFor='fullname'>Fullname </label>
                <input type='text' name='fullname' id='fullname' onChange={(e) => setFullname(e.target.value)} />
            </div>
            {invalidMsgsHandle(2)}
            <div className='ForkliftRadio'>
                <p>Forklift truck</p>
                <label htmlFor='forklift_no'>No</label>
                <input
                    type='radio'
                    id='forklift_no'
                    name='forklift'
                    defaultChecked
                    onSelect={() => setForklifter(false)}
                />
                <label htmlFor='forklift_yes'>Yes</label>
                <input type='radio' id='forklift_yes' name='forklift' onSelect={() => setForklifter(true)} />
            </div>
            <button className='CreateBtn' onClick={() => btnCreateHandle()}>
                Create
            </button>
        </div>
    );
}
