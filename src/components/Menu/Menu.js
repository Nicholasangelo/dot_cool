import * as React from 'react';
import PropTypes from 'prop-types';
import '@fontsource/federo';
import WindowTo from '../WindowTo/WindowTo';
import { keyDownA11y } from '../../utils';

const fontType = {
    fontFamily: '"Federo", sans-serif',
};

const Menu = ({ topics }) => {
    const [topic, setTopic] = React.useState(topics[0].name);

    const handleClick = (e) => {
        setTopic(e.target.dataset.id);
    };

    const MenuItem = (t) => (
        <h3
            style={fontType}
            className={`nav${topic === t.text ? ' active' : ''}`}
            data-id={t.name}
            onClick={keyDownA11y(handleClick)}
            key={t.name}
        >
            {t.text}
        </h3>
    );
    return (
        <>
            <div className='menu'>{topics.map(MenuItem)}</div>
            <WindowTo activeTopic={topic} />
        </>
    );
};

Menu.propTypes = {
    topics: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            name: PropTypes.string,
        }),
    ),
};
export default Menu;
