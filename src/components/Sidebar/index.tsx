import React from "react";
import * as S from "./styled";
import { VscFiles, VscSearch, VscGithub } from "react-icons/vsc";
import { ToggleSwitch } from "../ToggleSwitch";

interface SidebarProps {
    isDark: boolean;
    toggleTheme: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isDark, toggleTheme }) => {
    return (
        <S.SidebarContainer>
            <S.IconButton>
                <VscFiles />
            </S.IconButton>
            <S.IconButton>
                <VscSearch />
            </S.IconButton>
            <S.IconButton>
                <VscGithub />
            </S.IconButton>
            <S.ThemeToggleWrapper>
                <ToggleSwitch isDark={isDark} toggleTheme={toggleTheme} />
            </S.ThemeToggleWrapper>
        </S.SidebarContainer>
    );
};
