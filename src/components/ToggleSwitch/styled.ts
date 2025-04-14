import styled from "styled-components";

export const ThemeToggleButton = styled.button`
    background: transparent;
    border: none;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.icon};
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
        color: ${({ theme }) => theme.colors.primary};
    }
`;
