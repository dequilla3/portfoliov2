import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n3g7lut",
        "template_pdbgsui",
        formRef.current,
        "NUn749_nrxPz6lJ5q"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Lets disuss your project here.</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" /> 09183893886
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" /> deqkim5@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" /> Mindanao,
              Philippines
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Whats your story? </b>
            Get in touch. Always available for freelancing if the right projects
            come along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name"></input>
            <input type="text" placeholder="Subject" name="user_sub"></input>
            <input type="text" placeholder="Email" name="user_mail"></input>
            <textarea rows="5" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
            {done && "Thanks!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
