import { createContext, useState, useEffect, FunctionComponent, PropsWithChildren } from 'react';

interface ChangeThemeContextProps {
    theme: string;
    setTheme: (newTheme: string) => void;
}

// Maak de context met een default waarde
export const ChangeThemeContext = createContext<ChangeThemeContextProps>({
    theme: 'dark',
    setTheme: () => {
        console.warn('SetTheme has no implementation, give one!');
    },
});

// De provider component
const ChangeTheme: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [theme, setTheme] = useState<string>(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : 'dark';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const textColor = theme === "light" ? "#000" : "#FFF";
        const bgColor = theme === "light" ? "#FFF" : "#000";
        const cardColor = theme === "light" ? "#141414" : "#FAEBD7";
        const secondaryColor = theme === 'light' ? "#a08c2d" : "#a0522d";

        document.documentElement.style.setProperty('--text-color', textColor);
        document.documentElement.style.setProperty('--bg-color', bgColor);
        document.documentElement.style.setProperty('--card-color', cardColor);
        document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    }, [theme]);

    return (
        <ChangeThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ChangeThemeContext.Provider>
    );
};

export default ChangeTheme;