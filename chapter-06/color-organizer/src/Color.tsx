import React from "react";
import StarRating from "../../star-rating/src/StarRating";

export interface ColorType {
    id: string;
    title: string;
    color: string;
    rating: number;
}

export default function Color(color: ColorType) {
    const rating: number = color.rating;
    console.log("Rating: " + rating);
    return (
        <section>
            <h1>{color.title}</h1>
            <div style={{height: 50, backgroundColor: color.color}}/>
            <StarRating rating={rating}/>
        </section>
    );
}
