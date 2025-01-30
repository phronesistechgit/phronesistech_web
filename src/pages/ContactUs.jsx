// import React from "react";

// const ContactUs = () => {
// 	return (
// 		<section className="py-16 bg-white">
// 			<h2 className="text-3xl font-bold text-center text-blue-600">
// 				Contact Us
// 			</h2>
// 			<form className="max-w-3xl mx-auto mt-8 space-y-6">
// 				<div>
// 					<label className="block text-gray-700">Name</label>
// 					<input
// 						type="text"
// 						className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
// 						placeholder="Your Name"
// 					/>
// 				</div>
// 				<div>
// 					<label className="block text-gray-700">Email</label>
// 					<input
// 						type="email"
// 						className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
// 						placeholder="Your Email"
// 					/>
// 				</div>
// 				<div>
// 					<label className="block text-gray-700">Message</label>
// 					<textarea
// 						className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
// 						rows="4"
// 						placeholder="Your Message"></textarea>
// 				</div>
// 				<button
// 					type="submit"
// 					className="w-full bg-[#007CC2] text-white py-2 rounded hover:bg-blue-700">
// 					Send Message
// 				</button>
// 			</form>
// 		</section>
// 	);
// };

// export default ContactUs;

import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

// Schema for form validation using Yup
const schema = yup
	.object({
		name: yup.string().required("Name is required"),
		email: yup
			.string()
			.email("Invalid email")
			.required("Email is required"),
		message: yup.string().required("Message is required"),
	})
	.required();

const ContactUs = () => {
	const form = useRef();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		emailjs
			.sendForm("emailjs_gmail_phronesis", "template_p0fngao", data, {
				publicKey: "Do73VYB2pWfRB_MRj",
			})
			// emailjs.send("emailjs_gmail_phronesis","template_p0fngao",{
			// user_name: "test name",
			// user_email: "user@testemail.com",
			// message: "test msg",
			// reply_to: "test@replyto.com",
			// });
			.then(
				(response) => {
					alert("Message Sent Successfully!");
					console.log(response);
				},
				(error) => {
					alert("Failed to send message");
					console.error(error);
				}
			);
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"emailjs_gmail_phronesis",
				"template_p0fngao",
				form.current,
				{
					publicKey: "vjkGTRH1MHrrP5Doc",
				}
			)
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	return (
		<section id="contactus" className="max-w-lg mx-auto p-6">
			<h2 className="text-3xl font-bold text-center text-gray-600">
				Contact Us
			</h2>
			{/* <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<div>
					<label className="block">Name</label>
					<input
						type="text"
						{...register("name")}
						className="w-full p-2 border border-gray-300 rounded"
					/>
					<p className="text-red-500">{errors.name?.message}</p>
				</div>

				<div>
					<label className="block">Email</label>
					<input
						type="email"
						{...register("email")}
						className="w-full p-2 border border-gray-300 rounded"
					/>
					<p className="text-red-500">{errors.email?.message}</p>
				</div>

				<div>
					<label className="block">Message</label>
					<textarea
						{...register("message")}
						className="w-full p-2 border border-gray-300 rounded"
						rows="4"></textarea>
					<p className="text-red-500">{errors.message?.message}</p>
				</div>

				<button
					type="submit"
					className="w-full p-2 bg-blue-500 text-white rounded hover:bg-[#007CC2]">
					Submit
				</button>
			</form> */}
			<form ref={form} onSubmit={sendEmail}>
				<label className="text-md font-semibold text-blue-600">
					Type of Enquiry
				</label>
				<select
					name="enquiry_type"
					className="w-full p-2 border border-gray-300 rounded bg-white text-gray-700">
					<option value="" disabled selected>
						-- Select an Option --
					</option>
					<option value="general">Products Inquiry</option>
					<option value="support">Serivces Offered</option>
					<option value="sales">Custom Inquiry</option>
					{/* <option value="partnership">Inquiry 4</option> */}
				</select>
				<label className="text-md font-semibold text-blue-600">
					Name
				</label>
				<input
					type="text"
					name="user_name"
					className="w-full p-2 border border-gray-300 rounded"
				/>
				<label className="text-md font-semibold text-blue-600">
					Email
				</label>
				<input
					type="email"
					name="user_email"
					className="w-full p-2 border border-gray-300 rounded"
				/>
				<label className="text-md font-semibold text-blue-600">
					Contact Number
				</label>
				<input
					type="contact_number"
					name="user_contact_number"
					className="w-full p-2 border border-gray-300 rounded"
				/>
				<label className="text-md font-semibold text-blue-600">
					City
				</label>
				<input
					type="city"
					name="user_city"
					className="w-full p-2 border border-gray-300 rounded"
				/>
				<label className="text-md font-semibold text-blue-600">
					State
				</label>
				<input
					type="state"
					name="user_state"
					className="w-full p-2 border border-gray-300 rounded"
				/>
				<label className="text-md font-semibold text-blue-600">
					Message
				</label>
				<textarea
					name="message"
					className="w-full p-2 border border-gray-300 rounded"
				/>
				<input
					type="submit"
					value="Send"
					className="w-full p-2 bg-[#007CC2] text-white rounded hover:bg-green-500"
				/>
			</form>
		</section>
	);
};

export default ContactUs;
