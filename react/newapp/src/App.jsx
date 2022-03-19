import React, { useState } from 'react';
import './App.css';
import Open from './Components/Open';
import Game from './Components/Game';
import Result from './Components/Result';

const PAGE_OPEN = 0;
const PAGE_GAME = 1;
const PAGE_RESULT = 2;

const CARDS = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
];

export default function App() {
    const [winner, setWinner] = useState(false);

    const [page, setPage] = useState(PAGE_OPEN);

    const [bot, setBot] = useState({
        score: 0,
        cards: [],
        points: 0,
    });

    const [player, setPlayer] = useState({
        name: '',
        score: 0,
        cards: [],
        points: 0,
    });

    const handleRound = (win) => {
        bot.cards.shift();
        player.cards.shift();
        setBot({ score: bot.score, cards: bot.cards, points: (bot.points += win ? 0 : 1) });
        setPlayer({ name: player.name, score: player.score, cards: player.cards, points: (player.points += win ? 1 : 0) });
    };

    const init = ({ playerName = player.name, playerScore = player.score, botScore = bot.score }) => {
        var j, x, i;
        for (i = CARDS.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = CARDS[i];
            CARDS[i] = CARDS[j];
            CARDS[j] = x;
        }

        setPlayer({ name: playerName, score: playerScore, cards: CARDS.slice(0, 26), points: 0 });
        setBot({ score: botScore, cards: CARDS.slice(26), points: 0 });
    };

    const setName = (name) => {
        setPlayer({ name: name, score: player.score, cards: player.cards, points: player.points });
    };

    const pageHandler = () => {
        if (page === PAGE_OPEN)
            return <Open setPage={setPage} init={init} setName={setName} />;
        else if (page === PAGE_GAME)
            return (
                <Game
                    player={player}
                    setPlayer={setPlayer}
                    bot={bot}
                    setBot={setBot}
                    handleRound={handleRound}
                    init={init}
                    setPage={setPage}
                    setWinner={setWinner}
                />
            );
        else if (page === PAGE_RESULT)
            return <Result hasPlayerWin={winner} player={player} bot={bot} init={init} setPage={setPage} />;
    };

    return (
        <div className='App'>
            {pageHandler()}
            <footer>
                <p>Made with React by Barel Shraga</p>
            </footer>
        </div>
    );
}
