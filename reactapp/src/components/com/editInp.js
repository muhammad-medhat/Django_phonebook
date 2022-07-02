import React, { useState } from "react";
import './style.css';
const EditInp = (props) => {
  // console.log('EditInlup props', props);

  const [value, setValue] = useState(props.value);
  const [oldValue, setOldValue] = useState(props.value);

  const [isEditing, setIsEditing] = useState(false);

  const onChange = (event) => {
    setValue(event.target.value);
    console.log("onChange", event.target.value);
  };

  const onKeyDown = (event) => {};
  const onBlur = (event) => {};
  const onInput = (event) => {};
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  const save = () => {
    setValue(value);
    setIsEditing(false);
    debugger
    props.edit(value);
  };
  const cancelEdit = () => {
    setValue(oldValue);
    setIsEditing(false);
  };

  const renderNormal = () => {
    // console.log("renderNormal", value);
    return <div onClick={toggleEdit}>{value}</div>;
  };

  const renderEdit = () => {
    return (
      <>
        <input
          type="text"
          aria-label="Field name"
          value={value}
          onChange={onChange}
        />
        <button onClick={cancelEdit} className={"btn btn-danger btn-sm"}>
          &#x2715;
        </button>
        <button onClick={save} className={"btn btn-primary btn-sm"}>
          &#10003;
        </button>
      </>
    );
  };

  return <>{isEditing ? renderEdit() : renderNormal()}</>;
};

export default EditInp;
