import React from "react";
import Color, {ColorType} from "./Color";


export default function ColorList(colors: ColorType[]) {

    console.log(colors);
    console.log(colors.length);

    if (!colors.length) return <div>No Colors Listed. (Add a Color)</div>;

    return (
        <div>
            {colors.map(color => (
                <Color key={color.id} {...color} />
            ))}
        </div>
    );
}
