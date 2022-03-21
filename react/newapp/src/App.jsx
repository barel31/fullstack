import React, { useState } from 'react';
import './App.css';
import './Components/button-next.css';
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

    const [players, setPlayers] = useState([{name: 'test', wins: 10, losses: 5}, {name: 'test2', wins: 20, losses: 30}]);

    const [winner, setWinner] = useState(false);

    const [page, setPage] = useState(PAGE_OPEN);

    const [bot, setBot] = useState({
        wins: 0,
        losses: 0,
        cards: [],
        points: 0,
    });

    const [player, setPlayer] = useState({
        name: '',
        wins: 0,
        losses: 0,
        cards: [],
        points: 0,
    });

    const init = ({ playerName = player.name, playerWins = player.wins, botWins = bot.wins }) => {
        var j, x, i;
        for (i = CARDS.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = CARDS[i];
            CARDS[i] = CARDS[j];
            CARDS[j] = x;
        }
        // load wins/losses from players object
        players.map((v) => {
            if (v.name === playerName) {
                v.wins = playerWins;
                v.losses = botWins;
            }
        });

        setPlayer({ name: playerName, wins: playerWins, losses: botWins, cards: CARDS.slice(0, 26), points: 0 });
        setBot({ wins: botWins, cards: CARDS.slice(26), points: 0 });
    };

    const addPlayer = (name) => {
        if (!players.filter(e => e.name === name).length) {
            player.wins = 0;
            bot.wins = 0;
            setPlayers([...players, {name: name, wins: 0}]);
        } else {
            players.map((v) => {
                if (v.name === name) {
                    // setPlayer({name: name, wins: v.wins, losses: v.wins, points: 0});
                    player.name = name;
                    player.wins = v.wins;
                    player.losses = v.losses;
                    bot.wins = v.losses;
                    return;
                }
            });
        }
    };

    const handleRound = (win) => {
        bot.cards.shift();
        player.cards.shift();

        if (player.cards[0] === bot.cards[0])
            win = null;

        setBot({
            wins: bot.wins,
            cards: bot.cards,
            points: (bot.points += win === false ? 1 : 0)
        });
        setPlayer({
            name: player.name,
            wins: player.wins,
            losses: bot.wins,
            cards: player.cards,
            points: (player.points += win === true ? 1 : 0),
        });
    };

    const pageHandler = () => {
        if (page === PAGE_OPEN) return <Open setPage={setPage} init={init} addPlayer={addPlayer} players={players} player={player} />;
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
            return <Result hasPlayerWin={winner} player={player} bot={bot} init={init} setPage={setPage} setPlayer={setPlayer} />;
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
