import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="contact-details pt-5 font-bold">
          <h1>Send me a message!</h1>
          <h3>
            Got some suggestions to suggest or just want to say hello☺️?{" "}
            <span>Go ahead!</span>{" "}
          </h3>
          <div className="left-contact">
            <form action="">
              <div className="basic">
                <div className="name">
                  <label htmlFor="name">Name: </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="email">
                  <label htmlFor="email">Email: </label>
                  <input
                    type="text"
                    placeholder="Enter your email address"
                    id="email"
                    name="email"
                    required
                  />
                </div>
              </div>
              <div className="message">
                <label htmlFor="message">Your Message: </label>
                <textarea
                  name="message"
                  rows="10"
                  cols="95"
                  id="message"
                  placeholder="Type your message… I promise I read everything 👀"
                ></textarea>
              </div>
              <div className="submit">
                <button>
                    <span>Shoot ➡️</span>
                </button>
              </div>
            </form>
          </div>
        </div>
          <div className="flex items-center justify-center p-4 bg-gray-800 text-white text-lg">
            <h3>Made by Priya</h3>
          </div>
      </section>
    </>
  );
};

export default Contact;
