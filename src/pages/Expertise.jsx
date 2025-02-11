import { useState } from "react";
import { motion } from "framer-motion";
import {
	FaCloud,
	FaShieldAlt,
	FaCode,
	FaDatabase,
	FaCogs,
	FaTools,
} from "react-icons/fa";

const offerings = [
	{
		title: "Services",
		subOptions: [
			{ name: "IT consulting", icon: <FaCogs /> },
			{ name: "Software product development", icon: <FaCode /> },
			{ name: "Building custom apps", icon: <FaTools /> },
			{ name: "Managed IT services", icon: <FaDatabase /> },
			{ name: "Data integration", icon: <FaCloud /> },
			{ name: "DevOps", icon: <FaCogs /> },
			{ name: "IT Maintenance & Support", icon: <FaShieldAlt /> },
		],
	},
	{
		title: "Solutions",
		subOptions: [
			{ name: "CRM", icon: <FaCogs /> },
			{ name: "Data analytics & BI", icon: <FaDatabase /> },
			{ name: "Cloud", icon: <FaCloud /> },
			{ name: "ERP", icon: <FaCogs /> },
			{ name: "Business process management", icon: <FaTools /> },
			{ name: "eLearning", icon: <FaCode /> },
			{ name: "Digital commerce", icon: <FaShieldAlt /> },
			{ name: "Portals", icon: <FaDatabase /> },
			{ name: "Artificial intelligence", icon: <FaCogs /> },
			{ name: "Cyber security", icon: <FaShieldAlt /> },
			{ name: "Internet of Things", icon: <FaCloud /> },
		],
	},
	{
		title: "Technologies",
		subOptions: [
			{ name: "Salesforce", icon: <FaCogs /> },
			{ name: "AWS", icon: <FaCloud /> },
			{ name: "Azure", icon: <FaCloud /> },
			{ name: "Web development (.NET, Java, Python)", icon: <FaCode /> },
			{ name: "Oracle Apps/Fusion", icon: <FaDatabase /> },
			{ name: "NetSuite", icon: <FaTools /> },
			{ name: "Microsoft Technology stack", icon: <FaCogs /> },
			{ name: "Boomi", icon: <FaCloud /> },
			{ name: "Talend", icon: <FaDatabase /> },
			{ name: "Power BI", icon: <FaDatabase /> },
			{ name: "Atlassian (Jira, Bitbucket)", icon: <FaTools /> },
			{ name: "GitHub", icon: <FaCode /> },
		],
	},
];

const Expertise = () => {
	const [activeSection, setActiveSection] = useState(0);

	return (
		<section id="expertise" className="py-12 bg-gray-50">
			<h2 className="text-4xl font-bold text-center text-gray-700 mb-8">
				Our Offerings
			</h2>

			<div className="max-w-[100%] mx-auto px-2 md:px-4 lg:px-6 flex flex-col md:flex-row gap-2">
				{/* Left Section - Titles */}
				<div className="w-full md:w-1/3 flex flex-col gap-4">
					{offerings.map((offering, index) => (
						<motion.div
							key={index}
							className={`p-4 rounded-lg shadow-md cursor-pointer transition-all duration-300 ${
								activeSection === index
									? "bg-blue-500 text-white"
									: "bg-gray-200"
							}`}
							onClick={() => setActiveSection(index)}
							whileHover={{ scale: 1.05 }}>
							<h3 className="text-xl font-semibold">
								{offering.title}
							</h3>
						</motion.div>
					))}
				</div>

				{/* Right Section - Sub-options */}
				<motion.div
					className="w-full md:w-2/3 bg-white p-2 rounded-lg shadow-lg"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					{activeSection !== null && (
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
							{offerings[activeSection].subOptions.map(
								(sub, idx) => (
									<motion.div
										key={idx}
										className="flex items-center gap-4 p-4 bg-blue-100 text-blue-800 rounded-lg shadow-md transition-all duration-300"
										whileHover={{ scale: 1.05 }}>
										<span className="text-2xl">
											{sub.icon}
										</span>
										<span className="text-lg font-medium">
											{sub.name}
										</span>
									</motion.div>
								)
							)}
						</div>
					)}
				</motion.div>
			</div>
		</section>
	);
};

export default Expertise;
