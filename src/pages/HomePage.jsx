import React from "react";

const HomePage = () => {
	return (
		<section
			className="p-16 bg-cover bg-center text-center"
			style={{
				backgroundImage: "url('hero.jpg')",
			}}>
			<h1
				className="mt-5 text-5xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,1)]
 text-blue-600">
				Phronesis Tech
			</h1>
			<h1 className="text-2xl mt-2 font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,1)] text-blue-600">
				PIONEERING EXCELLENCE, ACHIEVING RESULTS
			</h1>
			<p className="text-white mt-4 text-lg">
				PhronesisTech, founded in 2022, is a leading custom software
				development company in Bengaluru, India. We deliver innovative
				digital solutions tailored to businesses worldwide, from
				startups to large enterprises.
			</p>
		</section>
	);
};

export default HomePage;
