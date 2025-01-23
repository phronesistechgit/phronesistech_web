import React from "react";

const AboutUs = () => {
	return (
		<section className="py-10 bg-blue-50">
			<h2 className="text-3xl font-bold text-center text-blue-600">
				About Us
			</h2>
			<div className="max-w-7xl p-2 mx-auto grid grid-cols-2 gap-6 mt-8 items-center">
				<div className="p-4 rounded-lg shadow-lg ring shadow-blue-500/50 w-3/4 mx-auto text-center">
					<h3 className="text-xl font-semibold text-blue-600">
						Company Mission and Vision
					</h3>
					<p className="mt-2 text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
				<div className="p-4 rounded-lg shadow-lg ring shadow-blue-500/50 w-3/4 mx-auto text-center">
					<h3 className="text-xl font-semibold text-blue-600">
						Core Values
					</h3>
					<p className="mt-2 text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
				<div className="p-4 rounded-lg shadow-lg ring shadow-blue-500/50 w-3/4 mx-auto text-center">
					<h3 className="text-xl font-semibold text-blue-600">
						Our Development Process
					</h3>
					<p className="mt-2 text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
				<div className="p-4 rounded-lg shadow-lg ring shadow-blue-500/50 w-3/4 mx-auto text-center">
					<h3 className="text-xl font-semibold text-blue-600">
						Why Choose PhronesisTech
					</h3>
					<p className="mt-2 text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
