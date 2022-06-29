import styled from 'styled-components';

const floats = keyframes`
        0%   {left:20%; top:20%;}
        25%  {left:1%;  top:30%;}
        50%  {left:16%; top:7%;}
        75%  {left:1%; top:10%;}
        100%  {left:11%; top:90%;}
  `;

export const Logo = styled.div`
    position: relative;
    animation-name: ${floats};
    animation-duration: 20s;
`;
