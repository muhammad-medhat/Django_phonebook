<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'


import './App.css';
import TodoList from './components/pages/todoList';
import ContactList from './components/pages/contactsList';
=======
import React, { useState, useEffect } from "react";
>>>>>>> phonebook

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "./App.css";
import TodoList from "./components/pages/todoList";

function App() {
  const APIURL = "http://localhost:8000/api/tasks";
  // const APIURL = 'https://jsonplaceholder.typicode.com/todos'

<<<<<<< HEAD
  const [todos, setTodos] = useState([])
  const [contacts, setContacts] = useState([])
  useEffect(() => {
    console.log('useEffect...')
                      // const start = new Date().getTime()
                      // console.log(start)
    appState == 'todos' ? loadTodos() : loadContacts()
  }, [])
  
const loadTodos = () => {
  fetch(APIURL)
  .then(res => res.json())
  .then(data => setTodos(data))
}
=======
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    console.log("useEffect...");
    // const start = new Date().getTime()
    // console.log(start)
    loadTodos();
  }, []);

  const loadTodos = () => {
    fetch(APIURL)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  };
>>>>>>> phonebook

  const loadContacts = () => {
    fetch('http://localhost:8000/api/contacts')
    .then(res => res.json())
    .then(data => setContacts(data))
  } 


  const AddTodo = (todo) => {
    console.log("AddTodo", todo);
    setTodos([...todos, todo]);
    //insert todo to Backend
    fetch(APIURL, {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const DeleteTodo = (id) => {
    console.log(`deleting: ${id}`);
    setTodos(todos.filter((todo) => todo.id !== id));

    //delete todo from Backend
    deleteB(id);
  };
  const editTodo = (task) => {
    // console.log('editTodo', task)
    const t = todos.filter((todo) => todo.id === task.id);
    t.title = task.title;
    t.description = task.description;

    //edit todo in Backend
    updateB(task);
  };

  //backend crud operations

    const deleteB = (id) => {
      fetch(`${APIURL}/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }
    const renderTodos = () => {
      return(
        <TodoList 
        todos={todos}
        onInsert={AddTodo}
        onDelete={DeleteTodo}
        onEdit={editTodo}
      />
      )
    }
    const renderPhonebook = () => {
      return(
        <ContactList 
        contacts={contacts}
        onInsert={AddTodo}
        onDelete={DeleteTodo}
        onEdit={editTodo}

      />
      )
    }
const [appState, setAppState] = useState('todosa')
  return (
    <div className="App">
      {appState === 'todos' ? renderTodos() : renderPhonebook()}
    </div>
  );
}

export default App;
