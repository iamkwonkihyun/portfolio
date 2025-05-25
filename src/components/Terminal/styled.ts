// components/Terminal/styled.ts
import styled from "styled-components";

export const TerminalWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background}; // 테마 배경
    color: ${({ theme }) => theme.colors.text}; // 테마 글자색
    height: 200px;
    padding: 1rem;
    overflow-y: auto;
    border-top: 1px solid ${({ theme }) => theme.colors.primary}; // 테마 포인트 컬러
`;

export const TerminalContent = styled.div`
    white-space: pre-wrap;
    line-height: 1.5;
    font-size: 1rem;
`;

export const TerminalInput = styled.input`
    background-color: none;
`;
