import './HomePage.css';
import { useNavigate } from 'react-router-dom';

export default function HomePage(props) {
    const navigate = useNavigate();

    const handleNextBtn = () => {
        if (props.userId.length === 9 && parseInt(props.userId) > 100000000) {
            if (!validFullName(props.fullName)) alert('invalid name');
            else if (props.gender !== 'Male' && props.gender !== 'Female') {
                alert('invalid gender');
            } else {
                return navigate('/work_prepare');
            }
        } else alert('invalid id ' + props.userId);
    };

    const validFullName = (name) => {
        if (name.length < 4) return false;

        var captureSpace = false;
        for (let i = 0; i < name.length; i++) {
            if (name[i] === ' ') {
                if (captureSpace) return false;
                captureSpace = true;
            } else if (name[i] < 'a' && name[i] > 'z') {
                return false;
            }
        }
        return captureSpace ? true : false;
    };

    const anegram = (str) => {
        if (typeof str !== 'string') return alert('not a string');

        for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
            if (str[i] !== str[j]) {
                return alert('not anargam');
            }
        }
        alert(`${str} is anargam`);
    };

    return (
        <div className='HomePage'>
            <button
                onClick={() => {
                    const str = prompt('anargam');
                    anegram(str);
                }}
            >
                anargam
            </button>
            <div className='FlexTop'>
                <h1>Enter your details</h1>
                <input
                    type='text'
                    name='userId'
                    id='userId'
                    maxLength='9'
                    placeholder='Enter your id'
                    onChange={(e) => props.setUserId(e.target.value)}
                />
                <input
                    type='text'
                    name='fullName'
                    id='fullName'
                    minLength='4'
                    placeholder='Enter your fullname'
                    onChange={(e) => props.setFullName(e.target.value)}
                />
                <select
                    name='userGender'
                    id='userGender'
                    placeholder='Choose gender'
                    onChange={(e) => props.setGender(e.target.value)}
                >
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                </select>
            </div>
            <div className='FlexBottom'>
                <button onClick={() => handleNextBtn()}>Next</button>
            </div>
        </div>
    );
}
