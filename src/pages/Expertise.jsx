import React from "react";

const Expertise = () => {
	return (
		<section className="py-16 bg-white">
			<h2 className="text-3xl font-bold text-center text-blue-600">
				Our Expertise
			</h2>
			<div className="max-w-7xl p-2 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
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
						Data Analytics
					</h3>
					<p className="mt-2 text-gray-700">
						Unlock the power of your data with advanced analytics,
						providing deep insights through dashboards,
						visualization tools, and predictive modeling.
					</p>
				</div>
				<div className="bg-blue-100 p-4 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-blue-600 line-clamp-2">
						Integrations
					</h3>
					<p className="mt-2 text-gray-700">
						Seamlessly connect systems, applications, and platforms
						to streamline processes, enhance productivity, and
						ensure data consistency.
					</p>
				</div>
				<div className="bg-blue-100 p-4 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-blue-600 line-clamp-2">
						Salesforce Consulting/Development
					</h3>
					<p className="mt-2 text-gray-700">
						Maximize your CRM potential with our Salesforce
						expertise, offering tailored solutions, automation, and
						seamless integrations.
					</p>
				</div>
				<div className="bg-blue-100 p-4 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-blue-600 line-clamp-2">
						Azure & .NET
					</h3>
					<p className="mt-2 text-gray-700">
						Build robust, scalable, and secure applications with our
						expertise in Microsoft Azure and .NET. From cloud
						computing and data storage to app development and
						hosting, we deliver end-to-end solutions tailored to
						meet your business needs.
					</p>
				</div>
				<div className="bg-blue-100 p-4 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-blue-600 line-clamp-2">
						AI
					</h3>
					<p className="mt-2 text-gray-700">
						Transform your business with cutting-edge AI solutions,
						including natural language processing, machine learning,
						and predictive analytics.
					</p>
				</div>
				<div className="bg-blue-100 p-4 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-blue-600 line-clamp-2">
						SharePoint, Project Management & IT Consulting
					</h3>
					<p className="mt-2 text-gray-700">
						Streamline your workflows, enhance collaboration, and
						achieve project success with our integrated solutions.
						{/* Our SharePoint services improve team productivity, while
						our project management and IT consulting expertise help
						you navigate challenges, implement best practices, and
						optimize IT solutions for sustained growth. */}
					</p>
				</div>
				<div className="bg-blue-100 p-4 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-blue-600 line-clamp-2">
						Custom App/Mobile App Development
					</h3>
					<p className="mt-2 text-gray-700">
						Create tailored mobile and web applications with
						intuitive designs and seamless user experiences that
						align with your business goals.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Expertise;
