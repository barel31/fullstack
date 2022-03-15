import React from 'react';
import './Game.css';

const PAGE_RESULT = 2;

export default function Game(props) {
    const next = () => {
        let playerWin = false;
        if (props.player.cards[0] > props.bot.cards[0]) {
            playerWin = true;
        }
        props.handleRound(playerWin);

        if (props.player.cards.length === 0) {
            // end of game
            props.setPage(PAGE_RESULT);
        }
    };

    let backgroundColor = 'red';
    const updateScore = () => {
        if (props.player.cards[0] > props.bot.cards[0]) {
            backgroundColor = 'green';
        }
    };
    updateScore();

    return (
        <div className='game' style={{ backgroundColor: backgroundColor }}>
            <h3>COMPUTER</h3>
            <div className='botCard'>
                <span className='cardNumber'>{JSON.stringify(props.bot.cards[0])}</span>
            </div>
            <div className='playerCard'>
                <span className='cardNumber'>{JSON.stringify(props.player.cards[0])}</span>
            </div>
            <div className='down'>
                <button onClick={() => next()}>Next ({props.player.cards.length}/26)</button>
                <h3>YOU</h3>
            </div>
        </div>
    );
}
