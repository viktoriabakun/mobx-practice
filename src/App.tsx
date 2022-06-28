import React from 'react';
import './App.css';
import Todo from "./pages/todo";
import Counter from "./pages/counter";

const App =  () => {

    return (
    <div className="App">
          <Counter />
          <Todo />
      </div>
  );
}

export default App;
