import * as React from 'react';
import cowboyNick from '../../../../images/cowboyNick.jpg';
import cowboyNickMd from '../../../../images/cowboy_nicky_mobile.png';

import {
    ImgStyleLg,
    ImgStyleMd,
    ImgWrapper,
    hatStyles,
    stareStyles,
    flowerStyles,
    beadsStyles,
    FeatWrapper,
    glassesStyles,
    jeansStyles,
} from './whoamiStyled';
import Tooltip from '../../../Tooltip/Tooltip';

const tips = [
    {
        name: 'hat',
        style: hatStyles,
        text: 'Practical problem solving without sacrificing an intuitve sense of style and cohesion, wither it is shade from the sun or complex UI systems',
        align: 'left',
    },
    {
        name: 'stare',
        style: stareStyles,
        text: 'Not bothered',
        align: 'right',
    },
    {
        name: 'flower',
        style: flowerStyles,
        text: 'Sensitive. Aware. Utilizes the inspiration of nature for finding creative solutions rather than reinventing what has already been provided.',
        align: 'left',
    },
    {
        name: 'beads',
        style: beadsStyles,
        text: 'Mindfull and well traveled. Able to find peace with clear eyes and heart in any situation.',
        align: 'right',
    },
    {
        name: 'glasses',
        style: glassesStyles,
        text: 'Always prepared at multiple levels, and with a fallback to tackle unforseen issues',
        align: 'right',
    },
    {
        name: 'jeans',
        style: jeansStyles,
        text: 'Casual. Durable. Able to withstand use and gets better with age and understanding.',
        align: 'left',
    },
];

const WhoamiComponent = () => (
    <ImgWrapper className='whoiam_img' bgImg={cowboyNick}>
        <ImgStyleLg src={cowboyNick} alt='Nicholas Angelo, Nicky as is known, Developer' />
        <ImgStyleMd src={cowboyNickMd} alt='Nicky B. Developer, tall' />
        {tips.map((tip) => (
            <FeatWrapper key={tip.name} style={tip.style}>
                <Tooltip text={tip.text} toolName='feature-tip' align={tip.align} />
            </FeatWrapper>
        ))}
    </ImgWrapper>
);

export default WhoamiComponent;
