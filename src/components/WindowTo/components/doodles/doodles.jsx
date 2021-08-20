import * as React from "react";
import './doodles.css';
import { doodles } from '../../../../images/sketches/index';
import { Doods } from './doodleStyles';

const DoodlesComponent = () => {
const [active, setActive] = React.useState(doodles[0].name);
	const handleDoodClick = (e) => {
		setActive(e.target.dataset.name)
	}

	return (
		<div className="doodles">
			<container id="sketchbookContainer" className="options">
				<div className="options">
				{doodles.map((doodle, i) => (
					<Doods key={doodle.name} data-name={doodle.name} className={active === doodle.name ? 'option active' : 'option'} doodle={doodle.src} onClick={handleDoodClick}>
						<div className='label'>
							<div className='info'>
								<div className='main'></div>
								<div className='sub'></div>
							</div>
						</div>
					</Doods>
				))}
				</div>
			</container>
		</div>
	)
}

export default DoodlesComponent;