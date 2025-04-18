// components/Terminal/TerminalOutput.tsx
import { useEffect, useState } from "react";
import * as S from "./styled";

const lines = ["> npm start", "Starting the development server...", "Compiled successfully!"];

export const TerminalOutput = () => {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedLines((prev) => [...prev, lines[i]]);
            i++;
            if (i === lines.length) clearInterval(interval);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <S.TerminalContent>
            {displayedLines.map((line, index) => (
                <div key={index}>{line}</div>
            ))}
        </S.TerminalContent>
    );
};
