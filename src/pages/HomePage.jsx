import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player"; // Import Lottie Player
import jsonfile from "./hero-animation.json"; // Lottie Animation JSON file
import "./HomePage.css";

// Tech Points
const points = [
	"CREDIBILITY",
	"COMPETENCE",
	"COMMITMENT",
	"CUSTOMER CENTRICITY",
	"CONTINUOUS IMPROVEMENT",
];

const HomePage = () => {
	return (
		<section
			id="home"
			className="pb-16 px-8 pt-[10rem] text-center flex flex-col md:flex-row items-center justify-center min-h-screen relative overflow-hidden">
			{/* Animated Gradient Background */}
			<div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-[#007CC2] animate-gradientMove z-0"></div>

			{/* Content Section */}
			<div className="flex flex-col items-center md:w-1/2 md:text-left text-center z-10">
				{/* Heading with Framer Motion Animation */}
				<motion.h1
					className="hidden md:block mt-5 text-5xl font-bold text-white relative z-10"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}>
					PhronesisTech
				</motion.h1>

				{/* Animated Points */}
				<div className="mt-12 flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto z-10">
					{points.map((point, index) => (
						<motion.div
							key={index}
							className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300 text-white flex items-center justify-center text-center min-w-[200px] cursor-default font-bold"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}>
							{point}
						</motion.div>
					))}
				</div>
			</div>

			{/* Lottie Animation Section */}
			<div className="md:w-1/2 flex justify-center z-10">
				<Player
					autoplay
					loop
					src={jsonfile} // Tech Lottie animation
					style={{ width: "100%", height: "500px" }}
				/>
			</div>
		</section>
	);
};

export default HomePage;
