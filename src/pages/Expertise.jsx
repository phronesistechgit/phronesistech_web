import { useState } from "react";

const Expertise = () => {
	const [activeSection, setActiveSection] = useState(0);

	// Data for Sections & Their Sub-options
	const offerings = [
		{
			title: "Services",
			subOptions: [
				"IT consulting",
				"Software product development",
				"Building custom apps (Mobile/Web apps)",
				"Managed IT services",
				"Data integration",
				"DevOps",
				"IT Maintenance & Support",
			],
		},
		{
			title: "Solutions",
			subOptions: [
				"CRM",
				"Data analytics & BI",
				"Cloud",
				"ERP",
				"Business process management",
				"eLearning",
				"Digital commerce",
				"Portals",
				"Artificial intelligence",
				"Cyber security",
				"Internet of Things",
			],
		},
		{
			title: "Technologies",
			subOptions: [
				"Salesforce",
				"AWS",
				"Azure",
				"Web development (.NET, Java, Python)",
				"Oracle Apps/Fusion",
				"NetSuite",
				"Microsoft Technology stack",
				"Boomi",
				"Talend",
				"Power BI",
				"Atlassian (Jira, Bitbucket)",
				"GitHub",
			],
		},
	];

	return (
		<section id="expertise" className="py-4 bg-white">
			<h2 className="text-3xl font-bold text-center text-gray-600 ml-6">
				Our Offerings
			</h2>

			<div className="max-w-7xl p-2 mx-auto flex flex-col md:flex-row mt-8">
				{/* Left Section - Titles */}
				<div className="w-full md:w-1/3">
					{offerings.map((offering, index) => (
						<div
							key={index}
							className={`bg-gray-200 p-4 shadow-md cursor-pointer transition ${
								activeSection === index ? "bg-gray-400" : ""
							}`}
							onClick={() =>
								setActiveSection(
									activeSection === index ? null : index
								)
							}>
							<h3 className="text-xl font-semibold">
								{offering.title}
							</h3>
						</div>
					))}
				</div>

				{/* Right Section - Sub-options (for Desktop) */}
				<div className="hidden md:block w-2/3 bg-gray-400 p-1">
					{activeSection !== null && (
						<div className="grid grid-cols-2 bg-gray-400 gap-4">
							{offerings[activeSection].subOptions.map(
								(sub, idx) => (
									<div
										key={idx}
										className="bg-gray-400 p-3 text-lg rounded-md">
										{sub}
									</div>
								)
							)}
						</div>
					)}
				</div>
			</div>

			{/* Mobile View - Sub-options Below Each Section */}
			<div className="md:hidden mt-4">
				{offerings.map(
					(offering, index) =>
						activeSection === index && (
							<div
								key={index}
								className="bg-gray-50 p-4 rounded-lg shadow-md mt-2">
								<div className="grid grid-cols-1 gap-2">
									{offering.subOptions.map((sub, idx) => (
										<div
											key={idx}
											className="bg-white p-3 rounded-md shadow-sm">
											{sub}
										</div>
									))}
								</div>
							</div>
						)
				)}
			</div>
		</section>
	);
};

export default Expertise;
