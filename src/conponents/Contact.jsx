import React from "react";
import "./contact.css";
// import { db } from "../firebase";
// import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {


    const handleSubmit = async (e) => {
        e.preventDefault();
        toast.info("Thanks for showing your interest will get back to you soon", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }


    return (
        <div className="contact" id="contact">
            <div className="header">
                <h1>CONTACT</h1>
                <h3>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</h3>
            </div>
            <div className="form">
                <form onSubmit={handleSubmit}>
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
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default Contact;