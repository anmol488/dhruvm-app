import React from "react";
import Button from "./Button";

function Contact() {
  return (
    <div className="space-y-10 py-16">
      <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
        Contact
      </h1>

      <div className="flex justify-center items-center w-screen">
        <form className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full bg-[#1B1B1B] p-6 my-4 md:px-12 lg:pl-20 lg:pr-30 mr-auto">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                className="input"
                type="text"
                placeholder="First Name"
              />
              <input
                className="input"
                type="text"
                placeholder="Last Name"
              />
              <input
                className="input"
                type="email"
                placeholder="Email"
              />
              <input
                className="input"
                type="number"
                placeholder="Phone"
              />
            </div>
            <div className="my-4">
              <textarea className="input resize-none" placeholder="Message" />
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <Button title="Send Message" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
