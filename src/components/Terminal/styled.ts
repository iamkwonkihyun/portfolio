// components/Terminal/styled.ts
import styled from "styled-components";

export const TerminalContainer = styled.div`
    width: 100%;
    height: 300px;
    background-color: #1e1e1e;
    color: #d4d4d4;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

export const TerminalHeader = styled.div`
    background-color: #2d2d2d;
    height: 2rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    gap: 0.5rem;
`;

export const Circle = styled.div<{ color: string }>`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({ color }) => color};
`;

export const HeaderTitle = styled.span`
    color: #aaa;
    font-size: 0.8rem;
    margin-left: 1rem;
    letter-spacing: 1px;
`;

export const TerminalBody = styled.div`
    padding: 1rem;
`;

export const TerminalLine = styled.div`
    margin: 0.2rem 0;
    span {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const Prompt = styled.span`
    color: #4fc3f7;
`;

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
