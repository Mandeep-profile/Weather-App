import { useState, createContext, useContext, useEffect } from "react"

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    )

    const ToggleTheme = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem("theme", isDarkMode ? "light" : "dark");
            return newMode;
        })
    }

    useEffect(() => {
        if (!isDarkMode) {
            document.body.classList.add("dark", isDarkMode);
        } else {
            document.body.classList.remove("dark", isDarkMode);
        }
    }, [isDarkMode])

    return <ThemeContext.Provider value={{ isDarkMode, ToggleTheme }}>{children}</ThemeContext.Provider>
}

export function useThemeContext() {
    return useContext(ThemeContext)
}

export default ThemeProvider