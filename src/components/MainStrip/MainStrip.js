import * as React from 'react';
import Menu from '../Menu/Menu.js';
import { MainStripWrapper } from './MainStripStyled';

const topics = [
    { name: 'whoami', text: 'WHO AM I' },
    { name: 'whatiknow', text: 'WHAT I KNOW' },
    { name: 'whativedone', text: "WHAT I'VE DONE" },
    { name: 'doodles', text: 'DOODLES' },
];

const MainStrip = () => (
    <MainStripWrapper>
        <Menu topics={topics} />
    </MainStripWrapper>
);

export default MainStrip;
