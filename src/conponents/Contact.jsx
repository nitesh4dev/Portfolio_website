import React from "react";
import "./contact.css";
const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
      
        const myForm = event.target;
        const formData = new FormData(myForm);
        
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => console.log("Form successfully submitted"))
          .catch((error) => alert(error));
      };
    return (
        <div className="contact" id="contact">
            <div className="header">
                <h1>CONTACT</h1>
                <h3>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</h3>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true">
                    <div className="input-field">
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" name="name" required />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Your Email:</label>
                        <input type="text" name="email" required />
                    </div>
                    <div className="input-field">
                        <label htmlFor="message">Message:</label>
                    <textarea name="message" cols="30" rows="8" id="message"></textarea>
                    </div>
                   <div className="input-field">
                   <input type="submit" />
                   </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;