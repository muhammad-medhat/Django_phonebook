import React, { useState } from "react";

const ContactForm = (props) => {
  const [contact, setcontact] = useState({ title: "", description: "" });
  const { onInsert, title } = props;

  // console.log('props', props);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit", contact);
    onInsert(contact);
  };

  return (
    <>
    <h3>{title}</h3>
      <form className=" ">
        <div className="form-group">
          <label htmlFor="name">name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="name"
            value={contact.name}
            onChange={(e) => setcontact({ ...contact, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone"> phone</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            placeholder=" phone"
            value={contact.phone}
            onChange={(e) => setcontact({ ...contact, phone: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone"> email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            placeholder=" email"
            value={contact.email}
            onChange={(e) => setcontact({ ...contact, email: e.target.value })}
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
