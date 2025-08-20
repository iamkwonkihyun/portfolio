import React from "react";
import * as S from "./styled";
import { VscFiles, VscSearch, VscGithub } from "react-icons/vsc";
import { FaSun, FaMoon } from "react-icons/fa";

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
                <S.GithubLink href='https://github.com/iamkwonkihyun' target='_blank'>
                    <VscGithub />
                </S.GithubLink>
            </S.IconButton>
            <S.IconButton>
                <S.ThemeToggleButton onClick={toggleTheme}>{isDark ? <FaMoon /> : <FaSun />}</S.ThemeToggleButton>
            </S.IconButton>
        </S.SidebarContainer>
    );
};
