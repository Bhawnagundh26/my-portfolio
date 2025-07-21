"use client";

import { useEffect, useState } from "react";
import { FaUser, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

export const Footer = () => {
  const [state, handleSubmit] = useForm("manbqyvz");

  // Date handling (to avoid hydration warning)
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    const currentDate = new Date().toLocaleString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });
    setTimestamp(currentDate);
  }, []);

  // Controlled form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <footer className="w-full pt-12 pb-8 px-4 mt-10 font-sans text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-14 md:gap-8 items-start justify-between">
        {/* LEFT: Contact Info */}
        <div className="flex-1 mb-10 md:mb-0">
          <h3 className="text-2xl font-extrabold mb-3">Get in Touch</h3>
          <p className="mb-7 text-base text-white">
            Thank you for checking out my portfolio! If you have any queries, feel free to drop your message.
          </p>
          <div className="flex items-center gap-3 mb-3">
            <FaUser className="text-lg text-white" />
            <div>
              <span className="font-bold text-white">Name</span>:{" "}
              <span className="text-white">Bhawna Gundh</span>
            </div>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <FaMapMarkerAlt className="text-lg text-white" />
            <div>
              <span className="font-bold text-white">Address</span>:{" "}
              <span className="text-white">New Delhi, India</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-lg text-white" />
            <div>
              <span className="font-bold text-white">Email</span>:{" "}
              <a
                href="mailto:bhawnagundh123@gmail.com"
                className="text-white underline"
              >
                bhawnagundh123@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-4 max-w-xl w-full"
        >
          <label className="text-2xl font-extrabold text-white">Message me</label>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="flex-1 px-4 py-3 rounded border text-black"
            />
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="flex-1 px-4 py-3 rounded border text-black"
            />
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="px-4 py-3 rounded border text-black"
          />

          <textarea
            id="message"
            name="message"
            required
            placeholder="Message.."
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="px-4 py-3 rounded border text-black"
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            className="bg-lime-400 text-black font-bold mt-2 py-3 px-8 rounded-full hover:bg-lime-500 transition text-lg"
          >
            {state.submitting ? "Sending..." : "Send message"}
          </button>
          {state.succeeded && (
            <p className="text-green-500 font-bold mt-2">
              Thank you for your message!
            </p>
          )}
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-sm text-center text-gray-200">
        &copy; Bhawna Gundh {new Date().getFullYear()} — All rights reserved.
        <br />
      </div>
    </footer>
  );
};
