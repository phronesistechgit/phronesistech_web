import React from "react";
import healthcare from "../assets/healthcare.jpg";
import retail from "../assets/retail.jpg";
import finance from "../assets/finance.jpg";
import logistics from "../assets/logistics.jpg";
import tech from "../assets/tech.jpg";

const Industries = () => {
	return (
		<section
			id="industries"
			className="min-h-screen py-16 bg-blue-50 flex flex-col items-center justify-center">
			<h2 className="text-4xl font-bold text-center text-gray-700 mb-8">
				Industries We Serve
			</h2>
			<div className="max-w-7xl p-6 mx-auto flex flex-wrap justify-center gap-10">
				{industries.map((industry, index) => (
					<div
						key={index}
						className="relative p-4 rounded-2xl shadow-xl h-40 md:h-60 flex flex-col items-center justify-end bg-cover bg-center transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden w-80">
						<img
							src={industry.image}
							alt={industry.name}
							className="absolute inset-0 w-full h-full object-cover opacity-80"
						/>
						<div className="relative bg-white bg-opacity-80 p-4 w-full text-center rounded-b-2xl">
							<h3 className="text-xl font-bold text-blue-700 z-10 drop-shadow-lg">
								{industry.name}
							</h3>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

const industries = [
	{
		name: "Healthcare & Life Sciences",
		image: healthcare,
	},
	{
		name: "Retail & E-commerce",
		image: retail,
	},
	{
		name: "Supply Chain & Logistics",
		image: logistics,
	},
	{
		name: "Financial Services",
		image: finance,
	},
	{
		name: "Tech-Focused Sector",
		image: tech,
	},
];

export default Industries;
