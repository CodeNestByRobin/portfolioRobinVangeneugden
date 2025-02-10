import {useContext} from "react";
import {ChangeLanguageContext} from "../context/changeLanguage.tsx";

export const useLanguage = () => {
    const context = useContext(ChangeLanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};