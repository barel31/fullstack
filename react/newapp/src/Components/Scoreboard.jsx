import React from 'react';
import './Scoreboard.css';

const PAGE_OPEN = 0;

export default function Scoreboard(props) {
    return (
        <div className='scoreboard'>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Nickname</th>
                        <th>WIN/LOSE</th>
                    </tr>
                </thead>
                <tbody>
                    {props.players.map((v, i) => {
                        return (
                            <tr key={i} className={v.name === props.player.name ? 'table-active' : ''}>
                                <th scope="row">#{i + 1}</th>
                                <td>{v.name}</td>
                                <td>{v.wins}/{v.losses}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
