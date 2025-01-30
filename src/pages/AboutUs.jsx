import React from "react";

const AboutUs = () => {
	return (
		<section id="aboutus" className="py-4 bg-gray-50">
			<h2 className="text-3xl font-bold text-center text-gray-600">
				About Us
			</h2>
			<h1 className="pr-[10%] pl-[10%] text-justify text-xl mt-2 font-bold text-gray-500">
				PhronesisTech is a dynamic company founded in 2022, offering
				innovative IT solutions, consulting, project and product
				management services. With a dual presence in Boston (USA) and
				Bangalore (India), we bring a global perspective to every
				project we undertake, ensuring the highest standards of delivery
				excellence across borders.
			</h1>
			<h1 className="pr-[10%] pl-[10%] text-justify text-xl mt-2 font-bold text-gray-500">
				As a service-based firm focused on business transformation and
				technology services, we are committed to making a positive
				impact for our customers by leveraging technology to unlock
				human potential. Leading change requires courage, innovation,
				focus, collaboration and we’re here as your champions.
			</h1>
			<div className="max-w-7xl pr-[10%] pl-[10%] grid grid-cols-1 lg:grid-cols-1 gap-6 mt-4 items-center">
				<div className="mx-auto text-center">
					{/* <h3 className="text-xl font-semibold text-blue-600">
						Company Mission
					</h3> */}
					<p className="text-justify text-xl text-gray-700">
						Our{" "}
						<span className="font-semibold text-blue-600">
							{" "}
							Mission
						</span>{" "}
						is to empower businesses through innovative, reliable
						and secure IT solutions that enhance operational
						efficiency and drive digital transformation
					</p>
				</div>
				<div className="mx-auto text-center">
					<p className="text-justify text-xl text-gray-700">
						Our{" "}
						<span className="font-semibold text-blue-600">
							Vision{" "}
						</span>
						is to be the leading provider of exceptional service
						solutions, recognized for our commitment to excellence,
						innovation and customer satisfaction
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
