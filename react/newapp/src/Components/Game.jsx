import React from 'react';
import './Game.css';

const PAGE_RESULT = 2;

export default function Game(props) {

    const next = () => {
        props.handleRound(props.player.cards[0] > props.bot.cards[0]);

        if (props.player.cards.length === 0) {
            // end of game
            const hasPlayerWin = props.player.points > props.bot.points ? true : false;
            props.setWinner(hasPlayerWin);

            props.init({ botWins: props.bot.wins + !hasPlayerWin, playerWins: props.player.wins + hasPlayerWin });
            props.setPage(PAGE_RESULT);
        }
    };

    const bgColor = () => {
        if (props.player.cards[0] > props.bot.cards[0])
            return '#6EBF8B';
        if (props.player.cards[0] < props.bot.cards[0])
            return '#D82148';
        return '#B8FFF9';
    }

    return (
        <div className='game' style={{ backgroundColor: bgColor() }}>
            <div className="up">
                <p className='name'>COMPUTER </p>
                <p className='score'>SCORE:<br/>COM - {props.bot.wins}<br/>{props.player.name} - {props.player.wins}</p>
            </div>
            <div className='card'>
                <span className='cardNumber'>{JSON.stringify(props.bot.cards[0])}</span>
            </div>
            <div className='card'>
                <span className='cardNumber'>{JSON.stringify(props.player.cards[0])}</span>
            </div>
            <div className='down'>
                <button autoFocus className='button-next' onClick={next}>
                    {props.player.cards.length > 1 ? 'NEXT' : 'FINISH'} ({27 - props.player.cards.length}/26)
                </button>
                <p className='name'>{props.player.name}</p>
            </div>
        </div>
    );
}
