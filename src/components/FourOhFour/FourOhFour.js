import * as React from 'react';
import jenny404 from '../../images/Jenny404.jpg';
import { PageStyle, imgStyle } from './FourOhFourStyles';

const FourOhFour = () => (
    <PageStyle>
        <title>Not found</title>
        <section>
            <img
                style={imgStyle}
                src={jenny404}
                alt='The page you are lookng for, at this time, does not exist'
            />
        </section>
    </PageStyle>
);

export default FourOhFour;
