import React, { useState } from "react";

export default function AddColorForm({ onNewColor }: { onNewColor: (title: string, color: string) => void }) {
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");

    const submit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        onNewColor(title, color);
        setTitle("");
        setColor("");
    };

    return (
        <form onSubmit={submit}>
            <input
                value={title}
                onChange={event => setTitle(event.target.value)}
                type="text"
                placeholder="color title..."
                required
            />
            <input
                value={color}
                onChange={event => setColor(event.target.value)}
                type="color"
                required
            />
            <button>ADD</button>
        </form>
    );
}
