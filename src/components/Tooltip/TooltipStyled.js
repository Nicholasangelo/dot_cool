import styled from 'styled-components';
import '@fontsource/balthazar';

export const Tip = styled.div`
    position: absolute;
    ${(props) => (props.alignment === 'left' ? 'right: 77px' : 'left: 40px')};
    background-color: #e6ddddc7;
    width: 200px;
    border-radius: 20px;
    border: solid black 4px;
    bottom: 0px;
    & p {
        font-family: 'Balthazar';
        font-size: 12px;
        margin: 10px;
    }
`;
