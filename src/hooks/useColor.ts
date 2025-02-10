import {useContext} from "react";
import {ChangeColorContext} from "../context/changeColor.tsx";

export const useColor = () => {
    const context = useContext(ChangeColorContext);
    if (context === undefined) {
        throw new Error('useColor must be used within a ColorProvider');
    }
    return context;
};