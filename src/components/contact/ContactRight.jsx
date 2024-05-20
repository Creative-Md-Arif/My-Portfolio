/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const ContactRight = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  //================Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  //================Email Validation start here ==============

  const handleSend = (e) => {  


    
    if (username === "") {
      setErrMessage("Username is required");
    } else if (phoneNumber === "") {
      setErrMessage("Phone Number is required");
    } else if (email === "") {
      setErrMessage("Please give Your Email");
    } else if (!emailValidation(email)) {
      setErrMessage("Give a Valid Email");
    } else if (subject === "") {
      setErrMessage("Please Give Your Subject");
    } else if (message === "") {
      setErrMessage("message is required");
    } else {
      setSuccessMsg(`Thank you dear ${username}, Your Messages has been sent Successfully`);
      setErrMessage("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
   
    }
    
  };

  return (
    <div >
      {errMessage && (
        <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#232726] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
          {errMessage}
        </p>
      )}
      {successMsg && (
        <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#232726] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
          {successMsg}
        </p>
      )}

      <div className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
        <div className="w-full flex flex-col lgl:flex-row gap-10">
          {/* name input */}
          <div className=" w-full lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              YOUR NAME
            </p>
            <input
              onChange={(e) =>{ setUsername(e.target.value), setErrMessage("")}}
              value={username}
              className={`${
                errMessage === "Username is required" &&
                "outline-designColor"
              } contactInput`}
              type="text"
            />
        
          </div>
          {/* phone input */}
          <div className="w-full  lgl:w-1/2 flex flex-col gap-4">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Phone number
            </p>
            <input 
              onChange={(e) => {setPhoneNumber(e.target.value), setErrMessage("")}}
              value={phoneNumber}
              className={`${
                errMessage === " Phone Number is required" && "outline-designColor"
              } contactInput`}
              type="number"
            />
          </div>
        </div>
        {/* email input start */}
        <div className="flex flex-col gap-6">
          <p className="text-sm text-gray-400 uppercase tracking-wide">email</p>
          <input 
            onChange={(e) =>{ setEmail(e.target.value),setErrMessage("")}}
            value={email}
            className={`${
              errMessage === "Please give Your Email" && "outline-designColor"
            } contactInput`}
            type="email"
          />
        </div>
        {/* email input end */}
        {/* SubJect input start */}
        <div className="flex flex-col gap-6">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Subject
          </p>
          <input 
            onChange={(e) =>{ setSubject(e.target.value),setErrMessage("")}}
            value={subject}
            className={`${
              errMessage === "Please Give Your Subject" && "outline-designColor"
            } contactInput`}
            type="text"
          />
        </div>
        {/* SubJect input end */}
        {/* Massage input start */}
        <div className="flex flex-col gap-6">
          <p className="text-sm text-gray-400 uppercase tracking-wide">
            Massage
          </p>
          <textarea 
            onChange={(e) => {setMessage(e.target.value),setErrMessage("")}}
            value={message}
            className={`${
              errMessage === "message is required" && "outline-designColor"
            } contactTextArea`}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        {/* Massage input end */}
        <button
          onClick={handleSend}
          className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
        >
          Send Massage
        </button>
        {errMessage && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#232726] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
            {errMessage}
          </p>
        )}
        {successMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#232726] shadow-shadowOne text-center text-green-500 text-base  tracking-wide animate-bounce">
            {successMsg}
          </p>

        )}
      </div>
    </div>
  );
};

export default ContactRight;
