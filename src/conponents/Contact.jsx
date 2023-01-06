import React from "react";
import "./contact.css";
const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="header">
                <h1>CONTACT</h1>
                <h3>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</h3>
            </div>
            <div className="form">
                <form action="">
                    <div className="input-field">
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" id="name" required />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Your Email:</label>
                        <input type="text" id="email" required />
                    </div>
                    <div className="input-field">
                        <label htmlFor="message">Message:</label>
                    <textarea cols="30" rows="8" id="message"></textarea>
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