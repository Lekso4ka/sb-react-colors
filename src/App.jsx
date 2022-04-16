import React, {useState} from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

const App = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    return (
        <BrowserRouter>
        <div>
            <nav>
                <Link to="/">Задать цвет</Link>
                <Link to="/text">Текст</Link>
                <Link to="/color">Цвет</Link>
            </nav>
            <div className="page">
                <Routes>
                    <Route path="/"
                        element={<Page1 
                                red={red}
                                green={green}
                                blue={blue}
                                setRed={setRed} 
                                setGreen={setGreen} 
                                setBlue={setBlue}
                                />}
                    />
                    <Route path="/text" element={<Page2 red={red} green={green} blue={blue}/>}/>
                    <Route path="/color" element={<Page3 red={red} green={green} blue={blue}/>}/>
                </Routes>
            </div>
        </div>
        </BrowserRouter>
    )
}

export default App;