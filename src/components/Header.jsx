// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/phronesis_logo.png"; // Import the logo file
// import hero from "../assets/hero.jpg"; // Import the logo file

const Header = () => {
	return (
		<header className="fixed top-0 left-0 w-full bg-white text-white shadow-xl shadow-blue-500/50 z-10">
			<div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
				<Link to="/">
					<img
						src={logo}
						alt="Company Logo"
						className="h-16 w-auto"
					/>
				</Link>
				<nav className="hidden md:flex space-x-6">
					<div className="group relative">
						<button className="text-blue-600 underline font-bold hover:text-black">
							Home
						</button>
					</div>
					<div className="group relative">
						<button className="text-blue-600 underline font-bold hover:text-black">
							Expertise
						</button>
						<div className="absolute left-0 hidden group-hover:block bg-white text-black p-2 rounded shadow-md">
							<a
								href="#"
								className="text-blue-600 block px-4 py-2 hover:bg-gray-100">
								Data Engineering
							</a>
							<a
								href="#"
								className="text-blue-600 block px-4 py-2 hover:bg-gray-100">
								Digital & Experience Engineering
							</a>
							<a
								href="#"
								className="text-blue-600 block px-4 py-2 hover:bg-gray-100">
								Cloud & DevOps Engineering
							</a>
							<a
								href="#"
								className="text-blue-600 block px-4 py-2 hover:bg-gray-100">
								AI/ML Engineering
							</a>
							<a
								href="#"
								className="text-blue-600 block px-4 py-2 hover:bg-gray-100">
								Digital Product Engineering
							</a>
						</div>
					</div>
					<div className="group relative">
						<button className="text-blue-600 underline font-bold hover:text-black">
							Industries
						</button>
						<div className="absolute left-0 hidden group-hover:block bg-white text-black p-2 rounded shadow-md">
							<a
								href="#"
								className="text-blue-600 block px-4 py-2 hover:bg-gray-100">
								Healthcare & Life Sciences
							</a>
							<a
								href="#"
								className="text-blue-600 block px-4 py-2 hover:bg-gray-100">
								Retail & E-commerce
							</a>
							<a
								href="#"
								className="text-blue-600 block px-4 py-2 hover:bg-gray-100">
								Supply Chain & Logistics
							</a>
							<a
								href="#"
								className="text-blue-600 block px-4 py-2 hover:bg-gray-100">
								Banking & Finance
							</a>
							<a
								href="#"
								className="text-blue-600 block px-4 py-2 hover:bg-gray-100">
								Financial Services
							</a>
							<a
								href="#"
								className="text-blue-600 block px-4 py-2 hover:bg-gray-100">
								Tech-Focused Sector
							</a>
						</div>
					</div>
					<div className="group relative">
						<button className="text-blue-600 underline font-bold hover:text-black">
							About Us
						</button>
						{/* <div className="absolute left-0 hidden group-hover:block bg-white text-black p-2 rounded shadow-md">
							<a
								href="#"
								className="text-blue-600 block px-4 py-2 hover:bg-gray-100">
								Company
							</a>
							<a
								href="#"
								className="text-blue-600 block px-4 py-2 hover:bg-gray-100">
								Press Media
							</a>
							<a
								href="#"
								className="text-blue-600 block px-4 py-2 hover:bg-gray-100">
								Our Blog
							</a>
						</div> */}
					</div>
					<div>
						<button className="text-blue-600 underline font-bold hover:text-black">
							Contact Us
						</button>
					</div>
				</nav>
				<button className="text-4xl md:hidden p-1 text-blue-500">
					☰
				</button>
			</div>
		</header>
	);
};

export default Header;
