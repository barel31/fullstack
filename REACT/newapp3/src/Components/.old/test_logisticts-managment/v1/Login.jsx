import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
    const navigate = useNavigate();
    // Hooks
    const [id, setId] = useState(0);
    const [activeWorker, setActiveWorker] = useState(-1);

    const btnEnterHandle = () => {
        if (id === '99999') {
            navigate('/manager');
        } else {
            const _id = Number(id);
            const index = props.workers.findIndex((v) => v.id === _id);
            if (index !== -1) {
                setActiveWorker(index);
                props.workers[index].login();
                
                props.setWorkers([...props.workers]);
            } else alert('Worker ' + id + ' is not exist');
        }
    };

    const btnUpdateHandle = (index) => {
        let flag = false;

        if (props.products[index].needForklift) {
            if (props.workers[activeWorker].forkliftLicense) {
                flag = true;
            }
        } else flag = true;

        if (flag) {
            props.products[index].inPlace = true;
            props.setProducts([...props.products]);

            props.workers[activeWorker].done();
            props.setWorkers([...props.workers]);
        } else alert('You need a forklift license to do this job');
    };

    return (
        <div className='Login'>
            {activeWorker === -1 ? (
                <>
                    <h2>Login</h2>
                    <div>
                        <label htmlFor='id'>NO.</label>
                        <input type='text' name='id' id='id' onChange={(e) => setId(e.target.value)} />
                    </div>
                    <button onClick={() => btnEnterHandle()} className='BtnEnter'>
                        Enter
                    </button>
                </>
            ) : (
                <>
                    <h2>Welcome {props.workers[activeWorker].fullname}</h2>
                    <div className='Details'>
                        <p>Details:</p>
                        <p>
                            Fullname: {props.workers[activeWorker].fullname}
                            <br />
                            NO.: {props.workers[activeWorker].id}
                            <br />
                            Forklift truck license: {props.workers[activeWorker].forkliftLicense ? 'Yes' : 'No'}
                        </p>
                    </div>
                    <div className='ProductsNotInPlace'>
                        {props.products.map((v, i) => {
                            if (!v.inPlace) {
                                return (
                                    <div key={i}>
                                        <p>
                                            NO. {v.id}
                                            <br />
                                            Name: {v.name}
                                            <br />
                                            Need forklift truck: {v.needForklift ? 'Yes' : 'No'}
                                            <button onClick={() => btnUpdateHandle(i)}>Update</button>
                                        </p>
                                    </div>
                                );
                            } else return null;
                        })}
                    </div>
                    <button className='BtnLogout'
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        Logout
                    </button>
                </>
            )}
        </div>
    );
}
