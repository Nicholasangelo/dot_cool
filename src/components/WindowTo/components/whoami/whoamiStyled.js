import styled from 'styled-components';

export const ImgStyleLg = styled.img`
    display: none;
    @media only screen and (min-width: 900px) {
        display: block;
        width: 100%;
        height: 100%;
        objectfit: cover;
    }
`;

export const ImgStyleMd = styled.img`
    width: 100%;
    height: 100%;
    objectfit: cover;
    @media only screen and (min-width: 899px) {
        display: none;
    }
`;

export const ImgWrapper = styled.div`
    position: relative;
    display: flex;
    place-content: center;
    height: 100%;
    background: rgb(221, 106, 63);
    box-shadow: 1px 1px 100px 70px white inset;
`;

export const hatStyles = {
    position: 'absolute',
    top: '0%',
    left: '64%',
    width: '15%',
    height: '8%',
};

export const stareStyles = {
    position: 'absolute',
    top: '8%',
    left: '71%',
    height: '12%',
    width: '5%',
};

export const glassesStyles = {
    position: 'absolute',
    top: '36%',
    left: '71%',
    height: '7%',
    width: '7%',
};

export const beadsStyles = {
    position: 'absolute',
    top: '61%',
    left: '71%',
    height: '8%',
    width: '5%',
};

export const flowerStyles = {
    position: 'absolute',
    top: '50%',
    left: '65%',
    height: '11%',
    width: '6%',
};

export const jeansStyles = {
    position: 'absolute',
    top: '88%',
    left: '56%',
    height: '11%',
    width: '21%',
};

export const FeatWrapper = styled.div`
    & .feature-tip {
        visibility: hidden;
        }
        @media (min-width: 1023px) {
        &:hover {
            & .feature-tip {
                visibility: visible;
            }
            }
        }
    }
`;
