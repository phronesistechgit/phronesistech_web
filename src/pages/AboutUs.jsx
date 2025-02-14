import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import jsonfile from "./animation.json";

const AboutUs = () => {
	return (
		<section
			id="aboutus"
			className="min-h-screen py-16 bg-white flex flex-col items-center justify-center">
			<h2 className="text-4xl font-bold text-center text-gray-700 mb-8">
				About Us
			</h2>
			<div className="max-w-6xl p-6 mx-auto flex flex-col md:flex-row items-center gap-10">
				<Player src={jsonfile} className="player" loop autoplay />
				<div className="flex flex-col gap-6 md:w-1/2 text-lg text-gray-900">
					<p className="text-justify leading-relaxed">
						<span className="font-extrabold text-[#007CC2]">
							PhronesisTech
						</span>{" "}
						is a dynamic company founded in 2022, offering
						innovative IT solutions, consulting, project, and
						product management services. With a dual presence in
						Boston (USA) and Bangalore (India), we bring a global
						perspective to every project we undertake, ensuring the
						highest standards of delivery excellence across borders.
					</p>
					<p className="text-justify leading-relaxed">
						As a service-based firm focused on business
						transformation and technology services, we are committed
						to making a positive impact for our customers by
						leveraging technology to unlock human potential. Leading
						change requires courage, innovation, focus, and
						collaboration, and we’re here as your champions.
					</p>
				</div>
			</div>
			<div className="max-w-6xl p-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-10 mt-12">
				<div className="text-center bg-white p-8 rounded-xl shadow-lg w-full md:w-1/2 border-t-4 border-[#007CC2] transform hover:scale-105 transition duration-500">
					<h4 className="text-4xl font-bold text-center text-[#007CC2] mb-8">
						Our Mission
					</h4>
					<p className="text-gray-800 leading-relaxed text-center">
						Our mission is to empower businesses through innovative,
						reliable, and secure IT solutions that enhance
						operational efficiency and drive digital transformation
					</p>
				</div>
				<div className="text-center bg-white p-8 rounded-xl shadow-lg w-full md:w-1/2 border-t-4 border-[#007CC2] transform hover:scale-105 transition duration-500">
					<h4 className="text-4xl font-bold text-center text-[#007CC2] mb-8">
						Our Vision
					</h4>

					<p className="text-gray-800 leading-relaxed text-center">
						Our vision is to be the leading provider of exceptional
						service solutions, recognized for our commitment to
						excellence, innovation and customer satisfaction
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
