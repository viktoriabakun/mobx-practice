import type { FC } from 'react';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home: FC = () => {
  const [todos, setTodos] = useState();

  const getRes = useCallback(async () => {
    await fetch('https://crudcrud.com/api/2c93691a3b514470a449d1ef670f7628/stuff')
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  const postStuff = useCallback(async () => {
    await fetch('https://crudcrud.com/api/2c93691a3b514470a449d1ef670f7628/stuff', {
      // Adding method type
      method: 'POST',

      // Adding body or contents to send
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        id: 1,
      }),

      // Adding headers to the request
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }, []);

  return (
    <div className="homeContainer">
      <Link className="link" to="/counter">
        Counter
      </Link>
      <Link className="link" to="todo">
        TodoList
      </Link>
      <div>
        list of todoLists:
        <button type="button" onClick={getRes}>
          get todos
        </button>
        <button type="button" onClick={postStuff}>
          post stuff
        </button>
        <div>{todos}</div>
      </div>
    </div>
  );
};

export default Home;
