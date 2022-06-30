import React from 'react';
import './App.css';
import TodoList from "./pages/todolist";
import Counter from "./pages/counter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";

const App =  () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<TodoList />} />
                    <Route path="/counter" element={<Counter />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
