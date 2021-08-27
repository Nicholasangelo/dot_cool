import styled from 'styled-components';

export const MainStripWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    @media (max-width: 898px) {
        flex-direction: column;
        align-items: center;
    }
    & .menu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: min-content;
        text-align: right;
        padding-right: 15px;

        @media (max-width: 898px) {
            flex-direction: row;
            width: 80vw;
            justify-content: space-between;
        }

        & .nav:hover {
            cursor: not-allowed;
        }
    }
`;
