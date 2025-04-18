import styled, { keyframes } from "styled-components";

const blink = keyframes`
    50% {
    opacity: 0;
    }
`;

export const Cursor = styled.span`
    display: inline-block;
    width: 2px;
    height: 1em;
    animation: ${blink} 1s step-start infinite;
    vertical-align: bottom;
    background-color: ${({ theme }) => theme.colors.text};
`;
