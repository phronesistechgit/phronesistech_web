// src/components/Header.js
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/phronesis_logo.png"; // Import the logo file
// import hero from "../assets/hero.jpg"; // Import the logo file

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Toggle Mobile Menu
	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const scrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<header className="fixed top-0 left-0 w-full bg-white text-white  z-10">
			<div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
				<Link to="/">
					<div className="flex items-center space-x-3">
						<img
							src={logo}
							alt="Company Logo"
							className="h-12 w-auto"
						/>

						<span className="text-3xl font-bold text-blue-600 hidden sm:block">
							PhronesisTech
						</span>
					</div>
				</Link>
				<nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6">
					<div className="group relative">
						<button
							onClick={() => scrollToSection("home")}
							className="text-gray-600 underline font-bold hover:text-blue-600">
							Home
						</button>
					</div>
					<div className="group relative">
						<button
							onClick={() => scrollToSection("expertise")}
							className="text-gray-600 underline font-bold hover:text-blue-600">
							Offerings
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
						<button
							onClick={() => scrollToSection("industries")}
							className="text-gray-600 underline font-bold hover:text-blue-600">
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
						<button
							onClick={() => scrollToSection("aboutus")}
							className="text-gray-600 underline font-bold hover:text-blue-600">
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
					{/* <div>
						<button className="text-gray-600 font-bold hover:text-blue-600">
							Contact Us
						</button>
					</div> */}
				</nav>
				<div className="flex items-center space-x-4">
					{/* Contact Us Button */}
					<Link to="/contact">
						<button
							onClick={() => scrollToSection("contactus")}
							className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition">
							Contact Us
						</button>
					</Link>

					{/* Mobile Menu Button */}
					<button
						onClick={toggleMobileMenu}
						className="md:hidden p-2 text-blue-600 focus:outline-none">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="w-8 h-8">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</div>
			{/* Mobile Menu (Dropdown) */}
			{isMobileMenuOpen && (
				<div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full py-4">
					<nav className="flex flex-col items-center space-y-4">
						<Link
							to="/"
							className="text-gray-600 font-bold hover:text-black"
							onClick={() => setIsMobileMenuOpen(false)}>
							Home
						</Link>
						<Link
							to="/expertise"
							className="text-gray-600 font-bold hover:text-black"
							onClick={() => setIsMobileMenuOpen(false)}>
							Expertise
						</Link>
						<Link
							to="/expertise"
							className="text-gray-600 font-bold hover:text-black"
							onClick={() => setIsMobileMenuOpen(false)}>
							Industries
						</Link>
						<Link
							to="/expertise"
							className="text-gray-600 font-bold hover:text-black"
							onClick={() => setIsMobileMenuOpen(false)}>
							About Us
						</Link>
						<Link
							to="/contact"
							className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition"
							onClick={() => setIsMobileMenuOpen(false)}>
							Contact Us
						</Link>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;
