import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../Context';

export default function HomePage() {
    const { validSignIn } = useContext(Context);

    return <div className='HomePage'>{validSignIn ? <Experience /> : <Signin />}</div>;
}

function Signin() {
    const { setId, setFullname, setGender, validClient, setValidSignIn } = useContext(Context);

    return (
        <div className='Signin'>
            <h1>Enter your details</h1>
            <input type='number' placeholder='Enter your id' onChange={(e) => setId(parseInt(e.target.value))} />
            <input type='text' placeholder='Enter your fullname' onChange={(e) => setFullname(e.target.value)} />
            <select onChange={(e) => setGender(e.target.value)}>
                <option value='' hidden>
                    Choose gender
                </option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
            </select>
            <button onClick={() => (validClient() ? setValidSignIn(true) : setValidSignIn(false))}>Next</button>
        </div>
    );
}

function Experience() {
    const { setPerWeek, setYears } = useContext(Context);
    const [valid, setValid] = useState(false);

    return (
        <div className='Experience'>
            {valid ? (
                <Confirm />
            ) : (
                <>
                    <div>
                        <label htmlFor='perWeek'>How many workout a week?</label>
                        <br />
                        <select id='perWeek' onChange={(e) => setPerWeek(parseInt(e.target.value))}>
                            {Array(7)
                                .fill(null)
                                .map((_, i) => {
                                    return (
                                        <option key={i} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    );
                                })}
                        </select>
                    </div>
                    <div>
                        <label htmlFor='years'>How many years you been training?</label>
                        <br />
                        <select id='years' onChange={(e) => setYears(parseInt(e.target.value))}>
                            {Array(31)
                                .fill(null)
                                .map((_, i) => {
                                    return (
                                        <option key={i} value={i}>
                                            {i}
                                        </option>
                                    );
                                })}
                        </select>
                    </div>

                    <button onClick={() => setValid(true)}>Next</button>
                </>
            )}
        </div>
    );
}

function Confirm() {
    const nav = useNavigate();

    const { fullname, setValidSignIn } = useContext(Context);

    return (
        <div className='Confirm'>
            <h1>Ready?</h1>
            <button onClick={() => nav(`/training/${fullname}`)}>Yes</button>
            <button onClick={() => setValidSignIn(false)}>No</button>
        </div>
    );
}
