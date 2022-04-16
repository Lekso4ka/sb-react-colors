import React from "react";

const P3 = ({red, green, blue}) => {
    const square = {
        width: "100px",
        height: "100px",
        backgroundColor: `rgb(${red},${green},${blue})`
    }
    return (
        <div>
            <h2>Цвет</h2>
            <div style={square}></div>
        </div>
    )
}

export default P3;