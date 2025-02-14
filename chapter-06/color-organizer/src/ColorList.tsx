import React from "react";
import Color from "./Color";
import {ColorInfo} from "./ColorInfo.tsx";

export interface ColorListProps {
    colors: ColorInfo[];
    onRemoveColor: (id: string) => void;
    onRateColor: (id: string, rating: number) => void;
}

const ColorList = (colorProps: ColorListProps) => {
    const {colors, onRemoveColor, onRateColor} = colorProps;
    if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

    return (
        <div>
            {colors.map((color) => (
                <Color key={color.id}
                       color={color}
                       onRateColor={onRateColor}
                       onRemoveColor={onRemoveColor}/>
            ))}
        </div>
    );
};

export default ColorList;
