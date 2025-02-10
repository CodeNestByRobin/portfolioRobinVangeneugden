import { FunctionComponent} from 'react';
import {useTheme} from "../hooks/useTheme.ts";
import Form from "react-bootstrap/Form";

const ThemeToggle: FunctionComponent = () => {
    const { theme, setTheme } = useTheme()

    // Verander de kleur wanneer de gebruiker een nieuwe kleur kiest
    const handleThemeChange = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);

    };

    return (
        <Form.Check // prettier-ignore
            className={"custom-toggle"}
            value={theme}
            type="switch"
            id="custom-switch"
            label={theme === 'light' ? (
                <i className="sun bi bi-brightness-high-fill"></i>
            ) : (
                <i className="moon bi bi-moon-stars-fill"></i>
            )}
            onChange={handleThemeChange}
        />
    );
};

export default ThemeToggle;