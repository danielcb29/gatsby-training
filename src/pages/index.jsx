import React from "react"
import { ColorBox } from "../components/colorbox/colorbox.jsx"
import '../main/index.js'

const Index = () => {
    const numberOfBoxes = 10;

    return (
        <div className="index">
            {Array(numberOfBoxes).fill().map((_, key) => (
                <ColorBox key={key} id={key}> I'm the box number {key}</ColorBox>
            ))}
        </div>
    )
}

export default Index;

