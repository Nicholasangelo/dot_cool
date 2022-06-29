import * as React from 'react';

const ScoreBoard = ({ logged, score }) => (
    <div>
        <p>Score: ${score}</p>
        <ul>
            LOGGED:
            {logged.map((l) => (
                <li>{l}</li>
            ))}
        </ul>
    </div>
);

export default ScoreBoard;
