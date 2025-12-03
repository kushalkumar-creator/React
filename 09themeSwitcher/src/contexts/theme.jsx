import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

// FIX: Create a proper Provider component
export function ThemeProvider({ children, value }) {
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export default function useTheme() {
    return useContext(ThemeContext);
}
