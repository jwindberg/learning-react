import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import jsonData from "./color-data.json";
import ColorList from "./ColorList.tsx";

import "./index.css";
import {ColorType} from "./Color.tsx";
const colorData: ColorType[] = jsonData;


const App = () => {
    const [colorTypes] = useState(colorData);
    return <ColorList colors={colorTypes} />;
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App/>);