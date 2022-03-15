import React, { useState } from 'react';
import Open from './Components/Open';
import Game from './Components/Game';
import Result from './Components/Result';

const PAGE_OPEN = 0;
const PAGE_GAME = 1;
const PAGE_RESULT = 2;

export default function App() {
    const [cards, setCards] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8,
        9, 10, 11, 12, 13,
    ]);

    const [page, setPage] = useState(PAGE_OPEN);

    const [bot, setBot] = useState({
        score: 0,
        cards: null,
        points: 0,
    });

    const [player, setPlayer] = useState({
        name: '',
        score: 0,
        cards: null,
        points: 0,
    });

    const handleRound = (win) => {
        let botCards = bot.cards;
        let playerCards = player.cards;
        botCards.shift();
        playerCards.shift();

        let botPoints = bot.points;
        let playerPoints = player.points;

        win ? (playerPoints += 1) : (botPoints += 1);

        setBot({ score: bot.score, cards: botCards, points: botPoints });
        setPlayer({ name: player.name, score: player.score, cards: playerCards, points: playerPoints });
    };

    const init = ({ playerName = player.name, playerScore = player.score, botScore = bot.score }) => {
        const shuffle = (a) => {
            var j, x, i;
            for (i = a.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = a[i];
                a[i] = a[j];
                a[j] = x;
            }
            return a;
        };
        setCards(shuffle(cards));
        setPlayer({ name: playerName, score: playerScore, cards: cards.slice(0, 26), points: 0 });
        setBot({ score: botScore, cards: cards.slice(26), points: 0 });
    };

    const setName = (name) => {
        setPlayer({ name: name, score: player.score, cards: player.cards, points: player.points });
    };

    const pageHandler = () => {
        if (page === PAGE_OPEN) return <Open setPage={setPage} init={init} setName={(n) => setName(n)} />;
        else if (page === PAGE_GAME) {
            return <Game player={player} setPlayer={setPlayer} bot={bot} setBot={setBot} handleRound={handleRound} init={init} setPage={setPage} />;
        } else if (page === PAGE_RESULT) {
            let winner = false;
            if (player.points > bot.points) {
                winner = true;
            }

            return <Result winner={winner} player={player} bot={bot} init={init} setPage={setPage} />;
        }
    };

    return <div>{pageHandler()}</div>;
}
