import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Sidebar, TabBar, Editor, Terminal } from "./components";

const App = () => {
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => setIsDark((prev) => !prev);
    const [activeFile, setActiveFile] = useState("README.md");

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyles />
            <div style={{ display: "flex", height: "100vh" }}>
                <Sidebar isDark={isDark} toggleTheme={toggleTheme} />
                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <TabBar activeFile={activeFile} setActiveFile={setActiveFile} />
                    <Editor activeFile={activeFile} />
                    <Terminal />
                </div>
            </div>
        </ThemeProvider>
    );
};

export default App;
