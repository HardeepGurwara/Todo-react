import React, { useState, useEffect } from 'react';
import Firebase from 'firebase';
import Header from './components/header/header.js';
import Todo from './components/todo/todo.js';
import Tachyons from 'tachyons';
import db from './firebase.js'
// import Form from './components/form/form.js';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState();

  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map((doc) => doc.data().title))
    })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('todos').add({
      title: input,
    })
    setInput("");
  };

  const deleteTodo = (e) => {
    e.preventDefault();
    let index = e.target.value;

    todos.splice(index, 1);
    setTodos([...todos]);
  }

  return (
    <div className="App light-green">
      <div className="card-container">
        <div className="card shadow-5 ">
          < Header />
          <form>
            <input className="br3 f6"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="button f5 green shadow-5 "
              type="submit"
              onClick={handleSubmit}
              disabled={!input}
            > Add</button>
          </form>
          {
            todos.map((todo, index) => (
              <Todo title={todo}
                key={index}
                value={index}
                deleteTodo={deleteTodo} />
            ))
          }

        </div>
      </div>
    </div>
  );
}

export default App;
