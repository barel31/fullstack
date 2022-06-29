import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Manager(props) {
    const navigate = useNavigate();

    return (
        <div className='Manager'>
            <h2>Manager</h2>
            <table>
                <thead>
                    <tr>
                        <td>NO</td>
                        <td>Fullname</td>
                        <td>Counter</td>
                        <td>Number of products</td>
                    </tr>
                </thead>
                <tbody>
                    {props.workers.map((v, i) => {
                        return (
                            <tr key={i}>
                                <td>{v.id}</td>
                                <td>{v.fullname}</td>
                                <td>{v.warehouseVisit}</td>
                                <td>{v.jobsDone}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button
                onClick={() => {
                    navigate('/');
                }}
            >
                Logout
            </button>
        </div>
    );
}
