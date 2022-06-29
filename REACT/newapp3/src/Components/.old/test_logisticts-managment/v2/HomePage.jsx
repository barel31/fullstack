import React, { useContext } from 'react';
import Context from '../Context';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const nav = useNavigate();
    return (
        <div className='HomePage'>
            <h2>Logistics Management</h2>
            <button onClick={() => nav('/signup')}>Signup</button>
            <button onClick={() => nav('/login')}>Login</button>
        </div>
    );
}

export function Signup() {
    const nav = useNavigate();

    const { setSignupId, setSignupFullname, setSignupLicense, validMsgsHandler, SignupBtnHandler } = useContext(
        Context
    );

    return (
        <div className='Signup'>
            <h2>Signup</h2>
            <div>
                <label htmlFor='id'>NO.</label>
                <input type='number' id='id' onChange={(e) => setSignupId(parseInt(e.target.value))} />
            </div>
            {validMsgsHandler(1, false)}
            <div>
                <label htmlFor='fullname'>Fullname</label>
                <input type='text' id='fullname' onChange={(e) => setSignupFullname(e.target.value)} />
            </div>
            {validMsgsHandler(2, false)}

            <h3>Forklift truck</h3>
            <input type='radio' name='license' id='licenseYes' onSelect={() => setSignupLicense(true)} />
            <label htmlFor='licenseYes'>Yes</label>
            <input type='radio' name='license' id='licenseNo' onSelect={() => setSignupLicense(false)} defaultChecked />
            <label htmlFor='licenseNo'>No</label>
            <button onClick={() => (SignupBtnHandler() ? nav('/') : null)}>Create</button>
        </div>
    );
}

export function Login() {
    const nav = useNavigate();

    const { setSignupId, loginHandler, activeWorker, products, updateProduct, setActiveWorker } = useContext(Context);

    return (
        <div className='Login'>
            <h2>Login</h2>
            <div>
                {activeWorker === -1 ? (
                    <>
                        <label htmlFor='id'>NO.</label>
                        <input type='number' onChange={(e) => setSignupId(parseInt(e.target.value))} />
                        <button onClick={() => (loginHandler() === true ? nav('/manager') : null)}>Enter</button>
                    </>
                ) : (
                    <>
                        <div className='Content'>
                            <h2>Welcome {activeWorker.fullname}</h2>
                            <p>
                                Details:
                                <br />
                                Fullname: {activeWorker.fullname}
                                <br />
                                NO.: {activeWorker.id}
                                <br />
                                Forklift truck license: {activeWorker.license ? 'Yes' : 'No'}
                            </p>
                            <h3>List of products</h3>
                            {products
                                // .filter((v) => v.inPlace === false)
                                .map((v, i) => {
                                    if (v.inPlace) return null;
                                    return (
                                        <div key={i} className='ProductItem'>
                                            <p>
                                                NO. {v.id}
                                                <br />
                                                Name: {v.name}
                                                <br />
                                                Need forklift License: {v.forklift ? 'Yes' : 'No'}
                                            </p>
                                            <button onClick={() => updateProduct(activeWorker, i)}>Update</button>
                                        </div>
                                    );
                                })}
                            <button
                                onClick={() => {
                                    nav('/');
                                    setActiveWorker(-1);
                                }}>
                                Logout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export function Manager() {
    const nav = useNavigate();

    const { workers } = useContext(Context);

    return (
        <div className='Manager'>
            <table>
                <thead>
                    <tr>
                        <td>NO.</td>
                        <td>Fullname</td>
                        <td>Counter</td>
                        <td>Number of products</td>
                    </tr>
                </thead>
                <tbody>
                    {workers
                        .filter((v) => v.visits)
                        .map((v, i) => {
                            return (
                                <tr key={i}>
                                    <td>{v.id}</td>
                                    <td>{v.fullname}</td>
                                    <td>{v.visits}</td>
                                    <td>{v.counter}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            <button onClick={() => nav('/')}>Logout</button>
        </div>
    );
}
