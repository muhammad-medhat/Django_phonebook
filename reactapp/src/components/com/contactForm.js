import React, { useState } from "react";

const ContactForm = (props) => {
  const [contact, setcontact] = useState({ title: "", description: "" });
  const { onInsert } = props;

  // console.log('props', props);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", contact);
    onInsert(contact);
  };

  return (
    <>
      <form className=" ">
        <div className="form-group">
          <label htmlFor="title">contact title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="contact title"
            value={contact.title}
            onChange={(e) => setcontact({ ...contact, title: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            value={contact.description}
            onChange={(e) => setcontact({ ...contact, description: e.target.value })}
          />
        </div>
        <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>
          Add New contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
