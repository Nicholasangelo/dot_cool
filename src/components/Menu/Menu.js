import * as React from 'react';
import PropTypes from 'prop-types';
import '@fontsource/federo';
import WindowTo from '../WindowTo/WindowTo';
import Nbutton from '../../elements/Nbutton/Nbutton';

const fontType = {
    fontFamily: '"Federo", sans-serif',
};

const Menu = ({ topics }) => {
    const [topic, setTopic] = React.useState(topics[0].name);

    const handleClick = (e) => {
        setTopic(e.target.dataset.id);
    };

    const MenuItem = (t) => {
        const { text, name } = t;
        return (
            <Nbutton
                text={text}
                textStyle={fontType}
                className={`nav${topic === text ? ' active' : ''}`}
                name={name}
                handler={handleClick}
                key={name}
            />
        );
    };
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
