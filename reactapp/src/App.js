import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'


import './App.css';
import TodoList from './components/pages/todoList';
import ContactList from './components/pages/contactsList';




function App() {
  const APIURL = "http://localhost:8000/api/tasks";
  const APIURL_contacts = "http://localhost:8000/api/contacts";
  const [appState, setAppState] = useState('todos')


  // const APIURL = 'https://jsonplaceholder.typicode.com/todos'

  const [todos, setTodos] = useState([])
  const [contacts, setContacts] = useState([])
  useEffect(() => {

    console.log(`useEffect ${appState}...`)
    appState == 'todos' ? loadTodos() : loadContacts()

  }, [appState])
  
const loadTodos = () => {
  fetch(APIURL)
  .then(res => res.json())
  .then(data => setTodos(data))
}

  const loadContacts = () => {
    fetch(APIURL_contacts)
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

  /**
   * Todo
   */
    const deleteB = (id) => {
      fetch(`${APIURL}/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }
    const updateB = (task) => {
      fetch(`${APIURL}/${task.id}`, {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      })

      .then(res => res.json())
      .then(data => console.log(data))
    }

    /**
     * Contact:
     */
    const insertB_contact = (contact) => {
      fetch(APIURL_contacts, {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json",
        },
      })
  
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    const deleteB_contacts = (id) => {
      fetch(`${APIURL_contacts}/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }
    const updateB_contacts = (contact) => {
      fetch(`${APIURL_contacts}/${contact.id}`, {
        method: 'PUT',
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }
  const AddContact = (contact) => {
    console.log("AddContact", contact);
    setContacts([...contacts, contact]);   
    insertB_contact(contact);
  }
  const DeleteContact = (id) => {
    console.log(`deleting: ${id}`);
    setContacts(contacts.filter((contact) => contact.id !== id));
    deleteB_contacts(id);
  }
  const editContact = (contact) => {
    // console.log('editContact', contact)
    const c = contacts.filter((contact) => contact.id === contact.id);
    c.name = contact.name;
    c.email = contact.email;
    c.phone = contact.phone;
    updateB_contacts(contact);
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
          onInsert={AddContact}
          onDelete={DeleteContact}
          onEdit={editContact}

      />
      )
    }
  return (
      <div className="App">
        <div className="navbar">
          <button className='btn btn-primary' onClick={()=>setAppState('todos')}>  Todos  </button>
          <button className='btn btn-primary' onClick={()=>setAppState('phone')}>Phonebook</button>
        </div>
        {appState === 'todos' ? renderTodos() : renderPhonebook()}
      </div>    

  );
}

export default App;
