"use client";
import React, { useState } from "react";
import { isValidEmail } from "../utils/emailCheck.js";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    reqType: "",
    message: "",
    consent: false,
  });
  const [errorLog, setErrorLog] = useState({
    firstnameError: false,
    lastnameError: false,
    emailError: false,
    reqTypeError: false,
    messageError: false,
    consentError: false,
  });

  const handleSubmit = () => {
    try {
      let errors = {
        firstnameError: false,
        lastnameError: false,
        emailError: false,
        reqTypeError: false,
        messageError: false,
        consentError: false,
      };

      // Validate fields and update errors
      if (!formData.firstname) {
        errors.firstnameError = true;
      }
      if (!formData.lastname) {
        errors.lastnameError = true;
      }
      if (!formData.email) {
        errors.emailError = true;
      } else if (!isValidEmail(formData.email)) {
        errors.emailError = true;
      }
      if (!formData.reqType) {
        errors.reqTypeError = true;
      }
      if (!formData.message) {
        errors.messageError = true;
      }
      if (!formData.consent) {
        errors.consentError = true;
      }

      // Set error log if there are errors
      if (Object.values(errors).some((error) => error)) {
        setErrorLog(errors);
      } else {
        document.getElementById("successModal").style.display = "block";
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          reqType: "",
          message: "",
          consent: false,
        });

        setTimeout(() => {
          setErrorLog({
            firstnameError: false,
            lastnameError: false,
            emailError: false,
            reqTypeError: false,
            messageError: false,
            consentError: false,
          });
          document.getElementById("successModal").style.display = "none";
        }, 4000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-6 flex-col border-2 bg-white p-4 rounded-xl w-[90vw] sm:max-w-[680px] my-2 sm:my-0">
      <h1 className="text-[35px] font-semibold">Contact Us</h1>
      <div className="flex gap-6 flex-col w-full sm:flex-row">
        <div className="input_cont sm:w-1/2">
          <label htmlFor="firstname" className="label">
            First Name*
          </label>
          <input
            type="text"
            id="firstname"
            value={formData.firstname}
            className="input_box"
            style={
              errorLog.firstnameError
                ? { border: `1px solid hsl(0, 66%, 54%)` }
                : {}
            }
            onBlur={() => {
              if (!formData.firstname) {
                setErrorLog({ ...errorLog, firstnameError: true });
              }
            }}
            onChange={(e) => {
              setFormData({ ...formData, firstname: e.target.value });
              setErrorLog({ ...errorLog, firstnameError: false });
            }}
          />
          {errorLog.firstnameError && (
            <p className="text-[12px]" style={{ color: "hsl(0, 66%, 54%)" }}>
              This field is required
            </p>
          )}
        </div>
        <div className="input_cont sm:w-1/2">
          <label htmlFor="lastname" className="label">
            Last Name*
          </label>
          <input
            type="text"
            id="lastname"
            className="input_box"
            value={formData.lastname}
            style={
              errorLog.lastnameError
                ? { border: `1px solid hsl(0, 66%, 54%)` }
                : {}
            }
            onBlur={() => {
              if (!formData.lastname) {
                setErrorLog({ ...errorLog, lastnameError: true });
              }
            }}
            onChange={(e) => {
              setFormData({ ...formData, lastname: e.target.value });
              setErrorLog({ ...errorLog, lastnameError: false });
            }}
          />
          {errorLog.lastnameError && (
            <p className="text-[12px]" style={{ color: "hsl(0, 66%, 54%)" }}>
              This field is required
            </p>
          )}
        </div>
      </div>
      <div className="input_cont">
        <label htmlFor="email" className="label">
          Email*
        </label>
        <input
          type="email"
          id="email"
          className="input_box"
          value={formData.email}
          style={
            errorLog.emailError ? { border: `1px solid hsl(0, 66%, 54%)` } : {}
          }
          onBlur={() => {
            if (!formData.email) {
              setErrorLog({ ...errorLog, emailError: true });
            }
          }}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            setErrorLog({ ...errorLog, emailError: false });
          }}
        />
        {errorLog.emailError && (
          <p className="text-[12px]" style={{ color: "hsl(0, 66%, 54%)" }}>
            This field is required
          </p>
        )}
        {!isValidEmail(formData.email) && formData.email && (
          <p className="text-[12px]" style={{ color: "hsl(0, 66%, 54%)" }}>
            Please enter a valid email address
          </p>
        )}
      </div>
      <div>
        <h1 className="text-gray-500 text-[15px]">Query Type*</h1>
        <div className="flex flex-col gap-6 mt-3 sm:flex-row">
          <div className="queryInp">
            <label className="label flex items-center gap-4">
              <input
                type="radio"
                name="req_type"
                value="General Enquiry"
                checked={formData.reqType === "General Enquiry"}
                onChange={(e) => {
                  setFormData({ ...formData, reqType: e.target.value });
                  setErrorLog({ ...errorLog, reqTypeError: false });
                }}
              />
              <span>General Enquiry</span>
            </label>
          </div>
          <div className="queryInp">
            <label className="label flex items-center gap-4">
              <input
                type="radio"
                name="req_type"
                value="Support Request"
                checked={formData.reqType === "Support Request"}
                onChange={(e) => {
                  setFormData({ ...formData, reqType: e.target.value });
                  setErrorLog({ ...errorLog, reqTypeError: false });
                }}
              />
              <span>Support Request</span>
            </label>
          </div>
        </div>
        {errorLog.reqTypeError && (
          <p className="text-[12px]" style={{ color: "hsl(0, 66%, 54%)" }}>
            This field is required
          </p>
        )}
      </div>
      <div className="input_cont">
        <label className="label" htmlFor="message">
          Message*
        </label>
        <textarea
          name="message"
          id="message"
          className="input_box min-h-24"
          value={formData.message}
          style={
            errorLog.messageError
              ? { border: `1px solid hsl(0, 66%, 54%)` }
              : {}
          }
          onBlur={() => {
            if (!formData.message) {
              setErrorLog({ ...errorLog, messageError: true });
            }
          }}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            setErrorLog({ ...errorLog, messageError: false });
          }}
        ></textarea>
        {errorLog.messageError && (
          <p className="text-[12px]" style={{ color: "hsl(0, 66%, 54%)" }}>
            This field is required
          </p>
        )}
      </div>
      <div>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={() => {
              setFormData({ ...formData, consent: !formData.consent });
              setErrorLog({ ...errorLog, consentError: false });
            }}
          />
          <span> I consent to being contacted by the team</span>
        </label>
        {errorLog.consentError && (
          <p className="text-[12px]" style={{ color: "hsl(0, 66%, 54%)" }}>
            This field is required
          </p>
        )}
      </div>
      <button className="btn_custom" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
