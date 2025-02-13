import React from "react";

const HowWeHelp = () => {
	return (
		<section className="py-4 bg-gray-50">
			<h2 className="text-3xl font-bold text-center text-[#007CC2]">
				How We Can Help
			</h2>
			<div className="max-w-7xl p-2 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
				<div className="bg-white p-4 rounded-lg shadow-md">
					<h3 className="text-center text-xl font-semibold text-[#007CC2]">
						Operational Efficiency
					</h3>
					<p className="mt-2 text-gray-700">
						Customized approaches to find the balance of growth,
						efficiency, and innovation, maximizing organizational
						outcomes.
					</p>
				</div>
				<div className="bg-white p-4 rounded-lg shadow-md">
					<h3 className="text-center text-xl font-semibold text-[#007CC2]">
						Payment Compliance
					</h3>
					<p className="mt-2 text-gray-700">
						Mitigate risks, reduce fraud, and meet evolving
						regulations while maintaining your competitive edge.
					</p>
				</div>
				<div className="bg-white p-4 rounded-lg shadow-md">
					<h3 className="text-center text-xl font-semibold text-[#007CC2]">
						Actionable Data Insights
					</h3>
					<p className="mt-2 text-gray-700">
						Transform data into actionable insights to accelerate
						growth, profitability, and drive operational excellence.
					</p>
				</div>
				<div className="bg-white p-4 rounded-lg shadow-md">
					<h3 className="text-center text-xl font-semibold text-[#007CC2]">
						Scale to Grow
					</h3>
					<p className="mt-2 text-gray-700">
						Transition to a scalable business model, optimizing
						people, processes, and technology for improved alignment
						and efficiency.
					</p>
				</div>
			</div>
		</section>
	);
};

export default HowWeHelp;
