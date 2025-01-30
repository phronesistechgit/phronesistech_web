import React from "react";

const HomePage = () => {
	return (
		<section
			id="home"
			className="pb-8 pl-16 pr-16 pt-16 bg-cover bg-center text-center"
			style={{
				backgroundImage:
					"url('https://raw.githubusercontent.com/phronesistechgit/phronesistech_web/refs/heads/main/blue-gradient.jpg')",
			}}>
			<h1 className="mt-5 text-4xl font-bold text-gray-600">
				PhronesisTech
			</h1>
			<h1 className="text-lg mt-2 text-gray-600">
				CREDIBILITY | COMPETENCE | COMMITMENT | CUSTOMER CENTRICITY |
				CONTINUOUS IMPROVEMENT
			</h1>
			{/* <p className="text-white font-bold mt-4 text-lg">
				"The best way to predict the future is to create it."
			</p> */}

			{/* Author Name - Right Aligned */}
			{/* <p className="text-white font-semibold text-md mt-2 text-right pr-[5%] md:pr-[15%] lg:pr-[30%]">
				-Peter Drucker
			</p> */}
		</section>
	);
};

export default HomePage;
