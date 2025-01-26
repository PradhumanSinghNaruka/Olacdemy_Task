import React from "react";
import { useForm } from "react-hook-form";

function Contact() {
  return (
    <>
      <div
        name="Contact Us"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className=" text-4xl md:text-6xl font-bold mb-4">Contact</h1>
        <div className=" flex flex-col items-center justify-center mt-5">
          <form
            // action="https://getform.io/f/raeqjora"
            // method="POST"
            className="bg-black-200  px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl md:text-4xl text-red-900 font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-black">FullName</label>
              <input
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-black">Email Address</label>
              <input
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-black">Message</label>
              <textarea
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Query"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white font-bold rounded-xl px-3 py-2 hover:bg-red-900 hover:text-white duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;