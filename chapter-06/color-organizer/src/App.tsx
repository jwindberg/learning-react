import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import jsonData from "./color-data.json";
import ColorList from "./ColorList";
import "./index.css";
import { ColorType } from "./Color";
import {ColorListProps} from "./ColorList";

const colorData: ColorType[] = jsonData;

const App = () => {
    const [colorTypes, setColorTypes] = useState(colorData);

    console.log("app-> " + colorTypes.length);

    return <ColorList colors={colorTypes} />;
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
