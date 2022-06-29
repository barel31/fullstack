import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
    const navigate = useNavigate();

    // Hooks
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [invalidMsgs, setInvalidMsgs] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const isAlpha = (name) => {
        for (let i = 0; i < name.length; i++) {
            if (name[i] >= '0' && name[i] <= '9') {
                return false;
            }
        }
        return true;
    };

    const isValidPassword = (pass) => {
        let alpha = false;
        let num = false;
        for (let i = 0; i < pass.length; i++) {
            if (pass[i] >= '0' && pass[i] <= '9') {
                num = true;
            } else if ((pass[i] >= 'a' && pass[i] <= 'z') || (pass[i] >= 'A' && pass[i] <= 'Z')) {
                alpha = true;
            }
        }
        return alpha && num;
    };

    const removeInvalidMsgs = (n) => {
        const index = invalidMsgs.findIndex((v) => v === n);
        if (index !== -1) {
            invalidMsgs.splice(index, n);
            setInvalidMsgs(invalidMsgs);
            setRefresh(!refresh);
        }
    };

    const validate = () => {
        let flag = false;

        // validate name
        if (fullname.length < 4 || !isAlpha(fullname)) {
            if (!invalidMsgs.includes(1)) setInvalidMsgs([...invalidMsgs, 1]);
            flag = true;
        } else removeInvalidMsgs(1);

        // validate password
        if (password.length < 8 || !isValidPassword(password)) {
            if (!invalidMsgs.includes(2)) setInvalidMsgs([...invalidMsgs, 2]);
            flag = true;
        } else removeInvalidMsgs(2);

        if (!flag) {
            props.setFullname(fullname);
            props.setPassword(password);
            navigate(`/${fullname}`);
        }
    };
    validate();

    const invalidMsgsHandle = (n) => {
        if (invalidMsgs.includes(n)) {
            return <p style={{ margin: 0, color: 'red' }}>Invalid input.</p>;
        }
    };

    return (
        <div className='SignUp'>
            <h1>Signup</h1>
            {invalidMsgsHandle(1)}
            <input type='text' placeholder='Fullname' onChange={(e) => setFullname(e.target.value)} />
            {invalidMsgsHandle(2)}
            <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        </div>
    );
}
