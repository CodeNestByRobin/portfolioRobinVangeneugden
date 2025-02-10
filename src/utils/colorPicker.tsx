import { FunctionComponent} from 'react';
import {useColor} from "../hooks/useColor.ts";

const ColorPicker: FunctionComponent = () => {
    const { primaryColor, setPrimaryColor } = useColor()

    // Verander de kleur wanneer de gebruiker een nieuwe kleur kiest
    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = e.target.value;
        setPrimaryColor(newColor); // Werk de context bij
    };

    return (
        <div className="color-picker">
            <input
                type="color"
                value={primaryColor} // Koppel de kleur aan de input
                onChange={handleColorChange} // Verander de kleur bij verandering
            />
        </div>
    );
};

export default ColorPicker;