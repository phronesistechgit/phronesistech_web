import React from "react";

const Industries = () => {
	return (
		<section id="industries" className="py-4 bg-blue-50">
			<h2 className="text-3xl font-bold text-center text-gray-600">
				Industries We Serve
			</h2>
			<div className="max-w-7xl p-2 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
				<div
					className="relative bg-white p-4 rounded-lg shadow-md h-40 flex items-center justify-center bg-cover bg-center"
					style={{
						backgroundImage:
							"url('https://raw.githubusercontent.com/phronesistechgit/phronesistech_web/refs/heads/main/healthcare-bg.png')",
					}}>
					<div className="absolute inset-0 bg-white/60 rounded-lg"></div>
					<h3 className="relative text-center text-xl font-bold text-gray-600">
						Healthcare & Life Sciences
					</h3>
				</div>
				<div
					className="relative bg-white p-4 rounded-lg shadow-md h-40 flex items-center justify-center bg-cover bg-center"
					style={{
						backgroundImage:
							"url('https://raw.githubusercontent.com/phronesistechgit/phronesistech_web/refs/heads/main/retail-bg.png')",
					}}>
					<div className="absolute inset-0 bg-white/60 rounded-lg"></div>
					<h3 className="relative text-center text-xl font-bold text-gray-600">
						Retail & E-commerce
					</h3>
				</div>
				<div
					className="relative bg-white p-4 rounded-lg shadow-md h-40 flex items-center justify-center bg-cover bg-center"
					style={{
						backgroundImage:
							"url('https://raw.githubusercontent.com/phronesistechgit/phronesistech_web/refs/heads/main/supply-bg.jpg')",
					}}>
					<div className="absolute inset-0 bg-white/60 rounded-lg"></div>
					<h3 className="relative text-center text-xl font-bold text-gray-600">
						Supply Chain & Logistics
					</h3>
				</div>
				<div
					className="relative bg-white p-4 rounded-lg shadow-md h-40 flex items-center justify-center bg-cover bg-center"
					style={{
						backgroundImage:
							"url('https://raw.githubusercontent.com/phronesistechgit/phronesistech_web/refs/heads/main/finance-bg.png')",
					}}>
					<div className="absolute inset-0 bg-white/60 rounded-lg"></div>
					<h3 className="relative text-center text-xl font-bold text-gray-600">
						Financial Services
					</h3>
				</div>
				<div
					className="relative bg-white p-4 rounded-lg shadow-md h-40 flex items-center justify-center bg-cover bg-center"
					style={{
						backgroundImage:
							"url('https://raw.githubusercontent.com/phronesistechgit/phronesistech_web/refs/heads/main/tech-bg.jpg')",
					}}>
					<div className="absolute inset-0 bg-white/60 rounded-lg"></div>
					<h3 className="relative text-center text-xl font-bold text-gray-600">
						Tech-Focused Sector
					</h3>
				</div>
			</div>
		</section>
	);
};

export default Industries;
