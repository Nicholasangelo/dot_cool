import * as React from 'react';
import PropTypes from 'prop-types';
import { WindowStyle } from './WindowToStyled';
import WhoamiComponent from './components/whoami/whoamiComponent';
import WhatiknowComponent from './components/whatiknow/whatiknow';
import WhativedoneComponent from './components/whativedone/whativedone';
import DoodlesComponent from './components/doodles/doodles';

const topicMap = {
    whoami: <WhoamiComponent />,
    whatiknow: <WhatiknowComponent />,
    whativedone: <WhativedoneComponent />,
    doodles: <DoodlesComponent />,
};

const WindowTo = ({ activeTopic }) => <WindowStyle>{topicMap[activeTopic]}</WindowStyle>;

WindowTo.propTypes = {
    activeTopic: PropTypes.string,
};

export default WindowTo;
