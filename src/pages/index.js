import * as React from 'react';
import { Top } from '../sharedStyles';
import '../main.css';
import { MainStrip, Social } from '../components';

const indexLayout = {
    height: '65%',
    width: '80%',
};

const bottomStrip = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    height: '10%',
};

const IndexPage = () => (
    <main id='entry'>
        <title>nickyb.cool</title>
        <Top />
        <div style={indexLayout}>
            <MainStrip />
        </div>
        <div style={bottomStrip}>
            <Social />
        </div>
    </main>
);

export default IndexPage;
