import { useNavigate } from 'react-router-dom';

export default function HomePage() {
    const navigate = useNavigate();
    
    return (
        <div className='HomePage'>
            <h2>Logisticts Management</h2>
            <div className='SignBtns'>
                <button onClick={() => navigate('/signup')}>Sign up</button>
                <button onClick={() => navigate('/login')}>Log in</button>
            </div>
        </div>
    );
}
