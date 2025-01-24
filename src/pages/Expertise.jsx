import React from "react";

const Expertise = () => {
	return (
		<section className="py-4 bg-white">
			<h2 className="text-3xl font-bold text-center text-blue-600">
				Our Expertise
			</h2>
			<div className="max-w-7xl p-2 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
				<div className="bg-blue-100 p-4 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-blue-600 line-clamp-2">
						Data Engineering
					</h3>
					<p className="mt-2 text-gray-700">
						We specialize in building scalable data pipelines,
						transforming raw data into actionable insights, and
						optimizing data storage solutions for seamless data
						processing.
					</p>
				</div>
				<div className="bg-blue-100 p-4 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-blue-600 line-clamp-2">
						Digital & Experience Engineering
					</h3>
					<p className="mt-2 text-gray-700"></p>
				</div>
				<div className="bg-blue-100 p-4 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-blue-600 line-clamp-2">
						Cloud & DevOps Engineering
					</h3>
					<p className="mt-2 text-gray-700"></p>
				</div>
			</div>
			<div className="max-w-7xl lg:px-[17%] p-2 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
				<div className="bg-blue-100 p-4 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-blue-600 line-clamp-2">
						AI/ML Engineering
					</h3>
					<p className="mt-2 text-gray-700"></p>
				</div>
				<div className="bg-blue-100 p-4 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-blue-600 line-clamp-2">
						Digital Product Engineering
					</h3>
					<p className="mt-2 text-gray-700"></p>
				</div>
			</div>
		</section>
	);
};

export default Expertise;
