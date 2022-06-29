import styled from 'styled-components';

export const GameBoard = styled.div`
    background-image: url(${(props) => props.bg});
    display: flex;
    height: 100%;
    border: inset 6px pink;
`;
