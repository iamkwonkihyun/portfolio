import styled from "styled-components";

export const TabBarWrapper = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.sidebar};
    height: 35px;
    padding: 0 1rem;
    align-items: center;
    border-bottom: 1px solid #333;
`;

export const TabItem = styled.div<{ $active: boolean }>`
    color: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.icon)};
    margin-right: 1.5rem;
    padding: 6px 10px;
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
    background-color: ${({ $active, theme }) => ($active ? theme.colors.background : "transparent")};
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Tabs = styled.div`
    display: flex;
    gap: 8px;
`;

export const Tab = styled.div<{ $active?: boolean }>`
    padding: 6px 12px;
    font-size: 14px;
    border-radius: 6px 6px 0 0;
    background-color: ${({ $active, theme }) => ($active ? theme.colors.background : "transparent")};
    color: ${({ $active, theme }) => ($active ? theme.colors.text : "#999")};
    border: ${({ $active }) => ($active ? "1px solid #444" : "none")};
    border-bottom: none;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.hover || "#3a3a3a"};
        color: ${({ theme }) => theme.colors.text};
    }
`;
