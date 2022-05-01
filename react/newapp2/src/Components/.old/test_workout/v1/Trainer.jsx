import './Trainer.css';
import { useNavigate } from 'react-router-dom';

export default function Trainer(props) {
    const navigate = useNavigate();

    const workoutWeek = props.workoutWeek | 0;
    const workoutYear = props.workoutYear | 0;

    let lastWorkout = (((workoutYear * 5) / workoutWeek) * props.lastWorkout).toFixed(1);
    const kmArr = [lastWorkout];

    const calculateKm = () => {
        const result = (lastWorkout * 1.15).toFixed(1);
        lastWorkout = result;
        kmArr.push(result);
        return result;
    };

    const btnStartHandler = () => {
        for (let i = 0; i <= workoutWeek; i++) {
            if (props.finished.includes(i)) continue;
            props.setActiveWorkout({ id: i + 1, km: kmArr[i] });
            break;
        }
        navigate('/workout');
    };

    const btnWorkoutHandler = (n, km) => {
        props.setActiveWorkout({ id: n, km: km });
        navigate('/workout');
    };

    if (workoutWeek === props.finished.length) {
        lastWorkout *= 1.15;
    }

    return (
        <div className='Trainer'>
            <h1>Welcome Trainer</h1>
            <button onClick={() => btnStartHandler()}>Start</button>
            {[...Array(workoutWeek | 0)].map((v, i) => {
                const km = i ? calculateKm(i) : lastWorkout;
                return props.finished.includes(i) ? null : (
                    <div
                        key={i}
                        className='WorkoutItem'
                        style={{ backgroundColor: 'grey' }}
                        onClick={() => btnWorkoutHandler(i + 1, km)}
                    >
                        <p>Workout N.O {i + 1}</p>
                        <p>{km} Km</p>
                    </div>
                );
            })}
        </div>
    );
}
