import React from "react";
import StarRating from "./StarRating";
import {FaTrash} from "react-icons/fa";
import {ColorInfo} from "./ColorInfo.tsx";

export interface ColorProps {
    color: ColorInfo;
    onRemoveColor: (id: string) => void;
    onRateColor: (id: string, rating: number) => void;
}

export default function Color(colorProps: ColorProps) {
    const {color, onRemoveColor, onRateColor} = colorProps;

    return (
        <section>
            <h1>{color.title}</h1>
            <button onClick={() => onRemoveColor(color.id)}>
                <FaTrash/>
            </button>
            <div style={{height: 50, backgroundColor: color.color}}/>
            <StarRating selectedStars={color.rating}
                        onRate={rating => onRateColor(color.id, rating)}
            />
        </section>
    );
}
