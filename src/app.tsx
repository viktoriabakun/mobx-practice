import type { FC } from 'react';
import React from 'react';
import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './pages/counter';
import Home from './pages/home';
import TodoList from './pages/todolist';

const App: FC = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
