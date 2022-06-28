import React from 'react';
import './App.css';
import Todo from "./pages/todo";
import Counter from "./pages/counter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";

const App =  () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/counter" element={<Counter />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
