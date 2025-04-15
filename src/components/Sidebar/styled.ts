import styled from "styled-components";

export const SidebarContainer = styled.div`
    width: 50px;
    background-color: ${({ theme }) => theme.colors.sidebar};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    gap: 1.5rem;
    border-right: 1px solid #333;
`;

export const IconButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.icon};
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const ThemeToggleButton = styled.button`
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font-size: 1.5rem;

    &:hover {
        opacity: 0.7;
    }
`;
