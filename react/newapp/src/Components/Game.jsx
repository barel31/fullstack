import React from 'react';
import './Game.css';
import './button-next.css';

const PAGE_RESULT = 2;

export default function Game(props) {
    const next = () => {
        props.handleRound(props.player.cards[0] > props.bot.cards[0]);

        if (props.player.cards.length === 0) {
            // end of game
            console.log('end');
            const hasPlayerWin = props.player.points > props.bot.points ? true : false;
            props.setWinner(hasPlayerWin);

            props.init({ botScore: props.bot.score + !hasPlayerWin, playerScore: props.player.score + hasPlayerWin });
            props.setPage(PAGE_RESULT);
        }
    };

    return (
        <div className='game' style={{ backgroundColor: props.player.cards[0] > props.bot.cards[0] ? '#6EBF8B' : '#D82148' }}>
            <h3>COMPUTER</h3>
            <div className='card'>
                <span className='cardNumber'>{JSON.stringify(props.bot.cards[0])}</span>
            </div>
            <div className='card'>
                <span className='cardNumber'>{JSON.stringify(props.player.cards[0])}</span>
            </div>
            <div className='down'>
                <button autoFocus className='button-next' onClick={next}>
                    {props.player.cards.length > 1 ? 'Next' : 'FINISH'} ({27 - props.player.cards.length}/26)
                </button>
                <h3>YOU</h3>
            </div>
        </div>
    );
}
