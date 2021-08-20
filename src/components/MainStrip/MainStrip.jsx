import * as React from 'react';
import Menu from '../Menu/Menu';

const topics = [
	{ name: 'whoami', text: 'WHO AM I' },
	{ name: 'whatiknow', text: 'WHAT I KNOW' },
	{ name: 'whativedone', text: "WHAT I'VE DONE" },
	{ name: 'doodles', text: 'DOODLES' },
]

const MainStrip = () => {
	return (
		<div className="main-strip">
			<Menu topics={topics} />
		</div>
	)
};

export default MainStrip;
