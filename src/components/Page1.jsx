import React, {useState} from "react";

const P1 = (props) => {
    const [color, setColor] = useState({r: props.red, g: props.green, b: props.blue})
    const changeRed = (e) => {
        let obj = {...color};
        obj.r = e.target.value;
        setColor(obj);
        props.setRed(e.target.value);
    }
    const changeGreen = (e) => {
        let obj = {...color};
        obj.g = e.target.value;
        setColor(obj);
        props.setGreen(e.target.value);
    }
    const changeBlue = (e) => {
        let obj = {...color};
        obj.b = e.target.value;
        setColor(obj);
        props.setBlue(e.target.value);
    }
    return (
        <div>
            <h2>Задать цвет</h2>
            <input type="number" placeholder="Red" onInput={changeRed} value={color.r}/>
            <input type="number" placeholder="Green" onInput={changeGreen} value={color.g}/>
            <input type="number" placeholder="Blue" onInput={changeBlue} value={color.b}/>
        </div>
    )
}

export default P1;