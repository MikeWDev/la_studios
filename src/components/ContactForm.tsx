import React from "react";
import Button from "./Button";

const ContactForm = () => {
  return (
    <form action="">
      <div className="name-inputs">
        <div className="contact-input">
          <label htmlFor="">first name</label>
          <input type="text" />
        </div>
        <div className="contact-input">
          <label htmlFor="">last name</label>
          <input type="text" />
        </div>
      </div>
      <div className="contact-input">
        <label htmlFor="">Email</label>
        <input type="text" />
      </div>
      <div className="contact-input">
        <label htmlFor="">Phone number</label>
        <input type="text" />
      </div>
      <div className="contact-input">
        <label htmlFor="">Type of event</label>
        <select name="" id="">
          <option value="">Wedding</option>
          <option value="">Event</option>
          <option value="">Lifestyle</option>
        </select>
      </div>
      <div className="contact-input">
        <label htmlFor="">Location of event</label>
        <input type="text" />
      </div>
      <div className="contact-input">
        <label htmlFor="">message</label>
        <textarea name="" rows={13} cols={20} id=""></textarea>
      </div>
      <Button text="submit" type="dark" />
    </form>
  );
};

export default ContactForm;
