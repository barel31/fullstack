import React from 'react';
import './Result.css';

const PAGE_GAME = 1;

export default function Result(props) {
    const botScore = props.bot.score + (props.winner ? 0 : 1);
    const playerScore = props.player.score + (props.winner ? 1 : 0);

    const again = () => {
        props.setPage(PAGE_GAME);
        props.init({ botScore: botScore, playerScore: playerScore });
    };

    const color = props.winner ? 'green' : 'red';
    return (
        <div className='result' style={{ border: '0.1em solid ' + color }}>
            <h1 style={{ color: color }}>{props.winner ? 'WIN' : 'LOSE'}</h1>
            <h2 style={{ color: color }}>
                COMP {botScore} — {playerScore} YOU
            </h2>
            <button onClick={again}>Again?</button>
        </div>
    );
}
