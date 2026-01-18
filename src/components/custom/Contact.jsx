import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="contact-details pt-5 font-bold">
          <h1 className="m-5 text-5xl md:text-7xl">Send me a message!</h1>
          <h3 className="text-xl md:text-2xl m-5">
            Got some suggestions to suggest or just want to say hello☺️?{" "}
            <span>Go ahead!</span>{" "}
          </h3>
          <div className="left-contact">
            <form action="">
              <div className="basic flex md:flex-row md:gap-10 flex-col">
                <div className="flex gap-1 items-center text-md md:flex-col md:items-start">
                  <label htmlFor="name">Name: </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="flex gap-1 items-center text-md md:flex-col md:items-start">
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
                  cols="55"
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
      </section>
    </>
  );
};

export default Contact;
