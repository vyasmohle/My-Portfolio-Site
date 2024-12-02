import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4hm0owk", // Service ID
        "template_y8fo27n", // Template ID
        form.current,
        "Ons_760SXa4lKFfRW" // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <form className="flex opacity-60 flex-col max-w-screen-sm mx-auto" ref={form} onSubmit={sendEmail}>
      <label>Name:</label>
      <input className="text-black px-3 py-2 rounded-3xl outline-none" type="text" name="user_name" required />

      <label>Email:</label>
      <input className="text-black px-3 py-2 rounded-3xl outline-none " type="email" name="user_email" required />

      <label>Message:</label>
      <textarea className="text-black px-3 py-2 w-full h-[32vh] rounded-xl outline-none" name="message" required />

      <div className="flex justify-center items-center mt-8" >
      <button className="px-5 py-2 w-[20vh] r bg-violet-700 rounded-xl text-semibold text-lg" type="submit">Submit</button>

      </div>

    </form>
  );
};

export default ContactForm;
