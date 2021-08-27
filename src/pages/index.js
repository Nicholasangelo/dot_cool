import * as React from 'react';
import '../main.css';
import { MainStrip, Social } from '../components';

const top = {
    width: '100%',
    height: '25%',
    margin: '0',
};

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
        <div style={top} />
        <div style={indexLayout}>
            <MainStrip />
        </div>
        <div style={bottomStrip}>
            <Social />
        </div>
    </main>
);

export default IndexPage;
