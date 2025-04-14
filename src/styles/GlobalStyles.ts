import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html, #root {
        width: 100%;
        height: 100%;
        font-family: 'Pretendard', sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        transition: background-color 0.3s ease, color 0.3s ease;
        overflow: hidden;
    }

    /* Scrollbar 커스터마이징 */
    ::-webkit-scrollbar {
    width: 1rem;
    }

    ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.scrollTrack || "#1e1e1e"};
    }

    ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollThumb || "#555"};
    border-radius: 4px;
    border: 2px solid transparent;
    background-clip: content-box;
    }

    ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.scrollThumbHover || "#888"};
    }
`;
