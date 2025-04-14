// components/Terminal/index.tsx
import React from "react";
import { TerminalWrapper } from "./styled";
import { TerminalOutput } from "./TerminalOutput";

export const Terminal = () => {
    return (
        <TerminalWrapper>
            <TerminalOutput />
        </TerminalWrapper>
    );
};
