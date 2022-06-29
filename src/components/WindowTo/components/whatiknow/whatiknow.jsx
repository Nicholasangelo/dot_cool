import * as React from 'react';
import gameGrass from '../../../../images/gameGrass.jpg';
import { logos } from '../../../../logos/index.js';
import { GameBoard } from './whatiknowStyled';
import { ScoreBoard, LogoFloat } from './components';

const WhatiknowComponent = () => {
	console.log('grass', gameGrass);
	return (
			<GameBoard bg={gameGrass}>
				{logos.map((logo, i) => (
					<LogoFloat image={logo.src} startingPos={''} />
				)
				)}
				<ScoreBoard score={''} logged={[]}/>
				<h1>what i know</h1>
			</GameBoard>
	)
};

export default WhatiknowComponent;
