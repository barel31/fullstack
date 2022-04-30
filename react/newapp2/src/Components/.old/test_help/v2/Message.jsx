import React, { useContext } from 'react';
import Header from './Header';
import Context from '../Context';
import { useNavigate } from 'react-router-dom';

export default function Message() {
    const navigate = useNavigate();
    const { fullname, type, cancel, setCancel, cancelHandler, cancelTries, validCancelHandler } = useContext(Context);

    return (
        <div className='Message'>
            <Header />
            <div className='MessageContent'>
                <p>{type}</p>
                <p>{fullname}</p>
            </div>
            <button
                disabled={cancelTries === 0}
                onClick={() => {
                    if (cancel) {
                        if (validCancelHandler()) navigate(`/${fullname}`);
                    } else setCancel(true);
                }}>
                Cancel
            </button>
            {cancelHandler()}
        </div>
    );
}
