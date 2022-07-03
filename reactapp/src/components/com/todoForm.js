import React, { useState } from "react";

const TodoForm = (props) => {
  const [todo, setTodo] = useState({ title: "", description: "" });
  const { onInsert, title } = props;

  // console.log('props', props);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", todo);
    onInsert(todo);
  };

  return (
    <>
        <h3>{title}</h3>
      <form className=" ">
        <div className="form-group">
          <label htmlFor="title">Task title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="task title"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
        </div>
        <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
          Add New Task
        </button>
      </form>
    </>
  );
};

export default TodoForm;
