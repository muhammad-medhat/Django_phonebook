import React, { useState } from 'react';
import './inlineEdit.css';

const InlineEdit = ({ type, value, setValue }) => {
  const [editingValue, setEditingValue] = useState(value);


  const onChange = (event) => setEditingValue({...editingValue, [event.target.name]: event.target.value});

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  }

  const onBlur = (event) => {
    if (event.target.value.trim() === "") {
      setEditingValue(value);
    } else {
      setValue(event.target.value)
    }
  }
  const onInput = (event) => {
    if (event.target.scrollHeight > 33) { 
      event.target.style.height = "5px";
      event.target.style.height = (event.target.scrollHeight - 16) + "px";
    }
  }
  if (type === 'textarea') {
    
    return (
      <textarea
       rows={1}
       aria-label="Field name"
       value={editingValue.description}
       onBlur={onBlur}
       onChange={onChange}
       onKeyDown={onKeyDown}
       onInput={onInput}
      />
    )
  }else{

  return (
    <input
      type="text"
      aria-label="Field name"
      value={editingValue.title}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  )
  }
}
export default InlineEdit;