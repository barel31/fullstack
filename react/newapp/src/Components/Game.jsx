import React from 'react';
import './Game.css';

const PAGE_RESULT = 2;

export default function Game(props) {
    const next = () => {
        let playerPoint = false;
        if (props.player.cards[0] > props.bot.cards[0]) {
            playerPoint = true;
        }
        props.handleRound(playerPoint);

        if (props.player.cards.length === 0) {
            // end of game

            let hasPlayerWin = false;
            if (props.player.points > props.bot.points) {
                hasPlayerWin = true;
            }
            props.setWinner(hasPlayerWin);

            const botScore = props.bot.score + (hasPlayerWin ? 0 : 1);
            const playerScore = props.player.score + (hasPlayerWin ? 1 : 0);

            props.init({ botScore: botScore, playerScore: playerScore });
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
                <button onClick={next}>Next ({props.player.cards.length}/26)</button>
                <h3>YOU</h3>
            </div>
        </div>
    );
}
