import React from "react";
import {createArray} from "./lib";
import Star from "./Star";
import {ColorInfo} from "./ColorInfo.tsx";

export interface StarRatingProps {
    totalStars?: number;
    selectedStars: number
    onRate: (rating: number) => void;
}

export default function StarRating(starRatingProps: StarRatingProps) {
    const {
        totalStars = 5,
        selectedStars,
        onRate
    } = starRatingProps;

    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => onRate(i + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    );
}
