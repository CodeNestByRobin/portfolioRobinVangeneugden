import {useContext} from "react";
import {ChangeThemeContext} from "../context/changeTheme.tsx";

export const useTheme = () => {
    const context = useContext(ChangeThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};