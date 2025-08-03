import { useEffect, useState } from "react";

const useDarkMode = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = window.localStorage.getItem("theme");
        if (savedTheme) return savedTheme;
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    });

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        window.localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    };

    const tokens = {
        text: theme === "dark" ? "#fff" : "#000",
        box: theme == "dark" ? "#1F2A40" : "#F2F0F0"
    };

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.style.setProperty('--background', '#141B2D');
            root.style.setProperty('--box', '#1F2A40');
            root.style.setProperty('--text', '#fff');
        } else {
            root.style.setProperty('--background', '#FCFCFC');
            root.style.setProperty('--box', '#F2F0F0');
            root.style.setProperty('--text', '#000');
        }

        window.localStorage.setItem("theme", theme);
    }, [theme]);

    return {
        theme,
        toggleTheme,
        tokens
    };
};

export default useDarkMode;