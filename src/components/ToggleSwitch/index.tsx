import React from "react";
import * as S from "./styled";
import { FaSun, FaMoon } from "react-icons/fa";

interface ToggleSwitchProps {
    isDark: boolean;
    toggleTheme: () => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isDark, toggleTheme }) => {
    return <S.ThemeToggleButton onClick={toggleTheme}>{isDark ? <FaMoon /> : <FaSun />}</S.ThemeToggleButton>;
};
