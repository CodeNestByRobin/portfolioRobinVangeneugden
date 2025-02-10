import { createContext, useState, useEffect, FunctionComponent, PropsWithChildren } from 'react';

// Definieer de context interface
interface ChangeColorContextProps {
    primaryColor: string;
    setPrimaryColor: (newColor: string) => void;
}

// Maak de context met een default waarde
export const ChangeColorContext = createContext<ChangeColorContextProps>({
    primaryColor: 'var(--primary-color)', // Fallback kleur als er niets is opgeslagen
    setPrimaryColor: () => {
        console.warn('SetPrimaryColor has no implementation, give one!');
    },
});

// De provider component
const ChangeColor: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [primaryColor, setPrimaryColor] = useState<string>(() => {
        const storedColor = localStorage.getItem('primaryColor');
        return storedColor ? storedColor : 'var(--primary-color)';
    });

    // Gebruik een effect om de kleur op te slaan wanneer deze verandert
    useEffect(() => {
        localStorage.setItem('primaryColor', primaryColor);
    }, [primaryColor]);

    return (
        <ChangeColorContext.Provider value={{ primaryColor, setPrimaryColor }}>
            {children}
        </ChangeColorContext.Provider>
    );
};

export default ChangeColor;