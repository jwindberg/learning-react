import React from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";

export default function App() {
    return (
        <StarRating
            style={{ backgroundColor: "lightblue" }}
            onDoubleClick={() => alert("double click")}
        />
    );
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App/>);