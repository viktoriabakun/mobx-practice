import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div>
        <Link to="/counter">Counter</Link>
        <Link to="todo">TodoList</Link>
    </div>
);

export default Home;