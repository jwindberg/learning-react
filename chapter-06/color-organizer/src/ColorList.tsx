import React from "react";
import Color, {ColorType} from "./Color";

export interface ColorListProps {
    colors: ColorType[];
}

const ColorList = (colorProps: ColorListProps) => {
    const colors = colorProps.colors;

    if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
    console.log("here in color list");
    return (
        <div>
            {colors.map((color) => (
                <Color key={color.id} {...color} />
            ))}
        </div>
    );
};

export default ColorList;
