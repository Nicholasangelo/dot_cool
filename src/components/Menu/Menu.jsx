import * as React from 'react';
import './menu.css';
import '@fontsource/federo';
import WindowTo from '../WindowTo/WindowTo';

const fontType = {
	fontFamily: '"Federo", sans-serif',
}

const Menu = ({ topics }) => {
	const [topic, setTopic] = React.useState(topics[0].name);

	const handleClick = (e) => {
		setTopic(e.target.dataset.id);
	}

	const MenuItem = (t) => <h3 style={fontType} className={`nav${topic === t.text ? ' active' : ''}`} data-id={t.name} onClick={handleClick} key={t.name}>{t.text}</h3>
	return (
		<>
			<div className='menu'>
				{topics.map(MenuItem)}
			</div>
			<WindowTo activeTopic={topic} />
		</>
	)
}

export default Menu;