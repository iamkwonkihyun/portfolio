import React from "react";
import * as S from "./styled";

interface TabBarProps {
    activeFile: string;
    setActiveFile: (fileName: string) => void;
}

export const TabBar: React.FC<TabBarProps> = ({ activeFile, setActiveFile }) => {
    const tabs = ["README.md", "MyStack.tsx", "Projects.ts", "About.py", "Contact.json"];

    return (
        <S.TabBarWrapper>
            <S.Tabs>
                {tabs.map((tab) => (
                    <S.Tab key={tab} $active={activeFile === tab} onClick={() => setActiveFile(tab)}>
                        {tab}
                    </S.Tab>
                ))}
            </S.Tabs>
        </S.TabBarWrapper>
    );
};
