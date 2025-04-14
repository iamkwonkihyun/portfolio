export const lightTheme = {
    colors: {
        background: "#ffffff",
        text: "#1e1e1e",
        primary: "#007acc",
        sidebar: "#f3f3f3",
        icon: "#333333",
        hover: "#e0e0e0",
        scrollTrack: "#f0f0f0", // 밝은 배경에 어울리는 트랙
        scrollThumb: "#cccccc", // 중간 밝기의 스크롤 바
        scrollThumbHover: "#999999",
    },
};

export const darkTheme = {
    colors: {
        background: "#1e1e1e",
        text: "#d4d4d4",
        primary: "#569cd6",
        sidebar: "#252526",
        icon: "#cccccc",
        hover: "#3a3a3a",
        scrollTrack: "#2e2e2e",
        scrollThumb: "#555555",
        scrollThumbHover: "#777777",
    },
};

export type ThemeType = typeof lightTheme;
