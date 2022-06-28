import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import TodoList from './components/pages/todoList';



function App() {
  const APIURL='http://localhost:8000/api/tasks'
  // const APIURL = 'https://jsonplaceholder.typicode.com/todos'

  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch(APIURL)
    .then(res => res.json())
    .then(data => setTodos(data))
  }, [])

  const AddTodo = (todo) => {
    setTodos([...todos, todo])
  }
  const DeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const EditTodo = (id, title, description) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.title = title
        todo.description = description
      }
      return todo
    }
    ))
  }

    

  return (
    <div className="App">
      <h1>react app</h1>
      <TodoList 
        todos={todos}
        onInsert={AddTodo}
        onDelete={DeleteTodo}
        onEdit={EditTodo}

      />
    </div>
  );
}

export default App;
