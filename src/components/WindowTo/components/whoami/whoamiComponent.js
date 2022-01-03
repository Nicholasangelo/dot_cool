import * as React from 'react';
import cowboyNick from '../../../../images/cowboyNick.jpg';
import {
    imgStyle,
    ImgWrapper,
    hatStyles,
    stareStyles,
    flowerStyles,
    beadsStyles,
    FeatWrapper,
    glassesStyles,
    jeansStyles,
} from './whoamiStyled';
import { HAT_TIP, STARE_TIP, FLOWER_TIP, BEAD_TIP, GLASSES_TIP, JEANS_TIP } from './whoami.strings';
import Tooltip from '../../../Tooltip/Tooltip';

const tips = [
    {
        name: 'hat',
        style: hatStyles,
        text: HAT_TIP,
        align: 'left',
    },
    {
        name: 'stare',
        style: stareStyles,
        text: STARE_TIP,
        align: 'right',
    },
    {
        name: 'flower',
        style: flowerStyles,
        text: FLOWER_TIP,
        align: 'left',
    },
    {
        name: 'beads',
        style: beadsStyles,
        text: BEAD_TIP,
        align: 'right',
    },
    {
        name: 'glasses',
        style: glassesStyles,
        text: GLASSES_TIP,
        align: 'right',
    },
    {
        name: 'jeans',
        style: jeansStyles,
        text: JEANS_TIP,
        align: 'left',
    },
];

const WhoamiComponent = () => (
    <ImgWrapper className='whoiam_img' bgImg={cowboyNick}>
        <img style={imgStyle} src={cowboyNick} alt='alt stuff' />
        {tips.map((tip) => (
            <FeatWrapper key={tip.name} style={tip.style}>
                <Tooltip text={tip.text} toolName='feature-tip' align={tip.align} />
            </FeatWrapper>
        ))}
    </ImgWrapper>
);

export default WhoamiComponent;
