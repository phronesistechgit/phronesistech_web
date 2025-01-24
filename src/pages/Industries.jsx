import React from "react";

const Industries = () => {
	return (
		<section className="py-4 bg-blue-50">
			<h2 className="text-3xl font-bold text-center text-blue-600">
				Industries We Serve
			</h2>
			<div className="max-w-7xl p-2 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
				<div className="bg-white p-4 rounded-lg shadow-md">
					<h3 className="text-center text-xl font-semibold text-blue-600">
						Healthcare & Life Sciences
					</h3>
					<p className="mt-2 text-gray-700">
						Innovative solutions to streamline patient care and
						medical record management.
					</p>
				</div>
				<div className="bg-white p-4 rounded-lg shadow-md">
					<h3 className="text-center text-xl font-semibold text-blue-600">
						Retail & E-commerce
					</h3>
					<p className="mt-2 text-gray-700">
						Robust platforms for online retail, inventory
						management, and customer engagement.
					</p>
				</div>
				<div className="bg-white p-4 rounded-lg shadow-md">
					<h3 className="text-center text-xl font-semibold text-blue-600">
						Supply Chain & Logistics
					</h3>
					<p className="mt-2 text-gray-700">
						Revolutionizing the movement of goods through efficient,
						agile, and innovative supply chain and logistics
						solutions.
					</p>
				</div>
			</div>
			<div className="max-w-7xl lg:px-[17%] p-2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
				<div className="bg-white p-4 rounded-lg shadow-md">
					<h3 className="text-center text-xl font-semibold text-blue-600">
						Financial Services
					</h3>
					<p className="mt-2 text-gray-700">
						Secure and efficient systems for banking, investment,
						and financial analysis.
					</p>
				</div>
				<div className="bg-white p-4 rounded-lg shadow-md">
					<h3 className="text-center text-xl font-semibold text-blue-600">
						Tech-Focused Sector
					</h3>
					<p className="mt-2 text-gray-700">
						Shaping the future by driving transformation through
						cutting-edge digital solutions and innovative
						technologies
					</p>
				</div>
			</div>
		</section>
	);
};

export default Industries;
