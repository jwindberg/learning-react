import ReactDOM from "react-dom/client";
import React, {useState} from "react";
import jsonData from "./color-data.json";
import ColorList from "./ColorList";
import "./index.css";
import {ColorInfo} from "./ColorInfo.tsx";
import AddColorForm from "./AddColorForm.tsx";


const App = () => {
    const colorData: ColorInfo[] = jsonData;
    const [colors, setColors] = useState(colorData);

    const removeColor = (id: string) => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
    }

    const rateColor = (id: string, rating: number) => {
        const newColors = colors.map(color => {
            if (color.id === id) {
                return {...color, rating};
            }
            return color;
        });
        setColors(newColors);
    }

    const generateGUID = () => {
        const guid = crypto.randomUUID();
        console.log("GUID: %s", guid);
        return guid;
    };

    const addColor = (title: string, color: string) => {
        console.log("New Color %s", color);
        const newColor: ColorInfo = {
            id: generateGUID(),
            title,
            color,
            rating: 0
        };
        setColors([...colors, newColor]);
    }

    return (
        <>
            <AddColorForm
                onNewColor={addColor}
            />
            <ColorList colors={colors}
                       onRemoveColor={removeColor}
                       onRateColor={rateColor}/>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App/>);
