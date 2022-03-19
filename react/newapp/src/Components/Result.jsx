import React from 'react';
import './Result.css';

const PAGE_GAME = 1;

export default function Result(props) {
    const color = props.hasPlayerWin ? 'green' : 'red';

    return (
        <div className='result' style={{ border: '0.1em solid ' + color }}>
            <h1 style={{ color: color }}>{props.hasPlayerWin ? 'WIN' : 'LOSE'}</h1>
            <h2 style={{ color: color }}>
                COMP {props.bot.score} — {props.player.score} YOU
            </h2>
            <button autoFocus className='button-next' onClick={() => props.setPage(PAGE_GAME)}>
                Again?
            </button>
        </div>
    );
}
