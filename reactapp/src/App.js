import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import TodoList from './components/pages/todoList';



function App() {
  
  const [todos, setTodos] = useState([
    {id:1, title: "Lag Ja Gale", description: " Woh Kaun Thi " , created_at: '2022',done: false},
    {id:2, title: "Tum Se Hi", description: " Jab We Met " , created_at: '2022',done: false},
    {id:3, title: "Tum Hi Ho", description: " Aashiqui 2 " , created_at: '2022',done: false},
    {id:4, title: "Mast Magan", description: " 2 States " , created_at: '2022',done: false},
    {id:5, title: "Soch Na Sake", description: " Airlift " , created_at: '2022',done: false},
    {id:6, title: "Sab Tera", description: " Baaghi " , created_at: '2022',done: true},
    {id:7, title: "Kaun Tujhe", description: " M.S. Dhoni: The Untold Story " , created_at: '2022',done: true},
    {id:8, title: "Humsafar", description: " Badrinath Ki Dulhania " , created_at: '2022',done: false}
  ])
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
        onEdit={EditTodo}

      />
    </div>
  );
}

export default App;
