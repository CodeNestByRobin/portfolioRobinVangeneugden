import {createContext, useState, FunctionComponent, PropsWithChildren, useEffect} from 'react';

// Definieer de context interface
interface ChangeLanguageContextProps {
    primaryLanguage: string;
    setPrimaryLanguage: (NewLanguage: string) => void;
}

// Maak de context met een default waarde
export const ChangeLanguageContext = createContext<ChangeLanguageContextProps>({
    primaryLanguage: 'EN', // Fallback kleur als er niets is opgeslagen
    setPrimaryLanguage: () => {
        console.warn('SetPrimaryLanguage has no implementation, give one!');
    },
});

// De provider component
const ChangeLanguage: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [primaryLanguage, setPrimaryLanguage] = useState<string>(() => {
        const storedLanguage = localStorage.getItem('primaryLanguage');
        return storedLanguage ? storedLanguage : 'EN';
    });

    useEffect(() => {
        localStorage.setItem('primaryLanguage', primaryLanguage);
    }, [primaryLanguage]);

    return (
        <ChangeLanguageContext.Provider value={{ primaryLanguage, setPrimaryLanguage }}>
            {children}
        </ChangeLanguageContext.Provider>
    );
};

export default ChangeLanguage;