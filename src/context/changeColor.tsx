import { createContext, useState, useEffect, FunctionComponent, PropsWithChildren } from 'react';

// Definieer de context interface
interface ChangeColorContextProps {
    primaryColor: string;
    setPrimaryColor: (newColor: string) => void;
}

// Maak de context met een default waarde
export const ChangeColorContext = createContext<ChangeColorContextProps>({
    primaryColor: '#46617E',
    setPrimaryColor: () => {
        console.warn('SetPrimaryColor has no implementation, give one!');
    },
});

// De provider component
const ChangeColor: FunctionComponent<PropsWithChildren> = ({ children }) => {
    const [primaryColor, setPrimaryColor] = useState<string>(() => {
        const storedColor = localStorage.getItem('primaryColor');
        return storedColor ? storedColor : '#46617E';
    });

    // Gebruik een effect om de kleur op te slaan wanneer deze verandert
    useEffect(() => {
        localStorage.setItem('primaryColor', primaryColor);
    }, [primaryColor]);

    useEffect(() => {
        document.documentElement.style.setProperty('--primary-color', primaryColor);
    }, [primaryColor]);

    return (
        <ChangeColorContext.Provider value={{ primaryColor, setPrimaryColor }}>
            {children}
        </ChangeColorContext.Provider>
    );
};

export default ChangeColor;