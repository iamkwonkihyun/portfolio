import styled from "styled-components";

export const EditorWrapper = styled.div`
    flex: 1;
    display: flex;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    overflow: auto;
`;

export const LineNumberWrapper = styled.div`
    width: 40px;
    padding: 1rem 0.7rem;
    text-align: right;
    user-select: none;
`;

export const CodeWrapper = styled.div`
    flex: 1;
    padding: 1rem;
    white-space: pre-wrap;
`;

export const CodeLineWrapper = styled.div``;

export const CodeLine = styled.div`
    width: 20px;
    height: 20px;
`;
