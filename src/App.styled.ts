import styled from "styled-components";

export const ScrollWrapper = styled.div`
    height: 100vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ScrollSection = styled.section`
    height: 100vh;
    scroll-snap-align: start;
    flex-shrink: 0;
`;
