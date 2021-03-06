import type { FC } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home: FC = () => (
  <div className="homeContainer">
    <Link className="link" to="/counter">
      Counter
    </Link>
    <Link className="link" to="todo">
      TodoList
    </Link>
  </div>
);

export default Home;
