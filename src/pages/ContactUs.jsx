import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    user_contact_number: yup
      .string()
      .matches(/^[0-9]$/, "Contact number is required")
      .required("Contact number is required"),
    user_city: yup.string().required("City is required"),
    user_state: yup.string().required("State is required"),
    message: yup.string().required("Message is required"),
  })
  .required();

const ContactUs = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    emailjs
      .sendForm("emailjs_gmail_phronesis", "template_p0fngao", form.current, {
        publicKey: "vjkGTRH1MHrrP5Doc",
      })
      .then(
        () => {
          alert("Message Sent Successfully!");
          reset();
        },
        (error) => {
          alert("Failed to send message");
          console.error(error);
        }
      );
  };

  return (
    <section className="max-w-3xl mx-auto bg-white p-6 md:p-8">
      {/* shadow-2xl rounded-2xl border border-gray-200 */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h2>
      <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-700 font-medium">Name</label>
            <input
              type="text"
              {...register("name")}
              className={`w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="text-gray-700 font-medium">Email</label>
            <input
              type="email"
              {...register("email")}
              className={`w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-gray-700 font-medium">Contact Number</label>
            <input
              type="text"
              {...register("user_contact_number")}
              className={`w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                errors.user_contact_number
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
              placeholder="Enter your contact number"
            />
            {errors.user_contact_number && (
              <p className="text-red-500 text-sm mt-1">
                {errors.user_contact_number.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-gray-700 font-medium">City</label>
            <input
              type="text"
              {...register("user_city")}
              className={`w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                errors.user_city ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your city"
            />
            {errors.user_city && (
              <p className="text-red-500 text-sm mt-1">
                {errors.user_city.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-gray-700 font-medium">State</label>
            <input
              type="text"
              {...register("user_state")}
              className={`w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                errors.user_state ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your state"
            />
            {errors.user_state && (
              <p className="text-red-500 text-sm mt-1">
                {errors.user_state.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="text-gray-700 font-medium">Message</label>
          <textarea
            {...register("message")}
            className={`w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            rows="4"
            placeholder="Type your message..."
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
