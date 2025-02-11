import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/phronesis_logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        <Link to="/">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Company Logo" className="h-12 w-auto" />
            <span className="text-3xl font-bold text-blue-600">
              PhronesisTech
            </span>
          </div>
        </Link>
        <nav className="hidden lg:flex space-x-8">
          {[
            { id: "home", label: "Home" },
            {
              id: "expertise",
              label: "Offerings",
              dropdown: [
                "Data Engineering",
                "Digital & Experience Engineering",
                "Cloud & DevOps Engineering",
                "AI/ML Engineering",
                "Digital Product Engineering",
              ],
            },
            {
              id: "industries",
              label: "Industries",
              dropdown: [
                "Healthcare & Life Sciences",
                "Retail & E-commerce",
                "Supply Chain & Logistics",
                "Banking & Finance",
                "Financial Services",
                "Tech-Focused Sector",
              ],
            },
            { id: "aboutus", label: "About Us" },
          ].map(({ id, label, dropdown }) => (
            <div key={id} className="relative group">
              <button
                className="text-gray-700 font-semibold text-lg hover:text-blue-600 transition px-4 py-2"
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
              {dropdown && (
                <div className="absolute left-0 hidden group-hover:block bg-white text-black p-4 rounded shadow-md w-56">
                  {dropdown.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => scrollToSection("contactus")}
            className="hidden lg:block bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg px-6 py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 font-bold"
          >
            Contact Us
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 text-blue-600 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute top-20 left-0 w-full py-6">
          <nav className="flex flex-col items-center space-y-6">
            {["home", "expertise", "industries", "aboutus", "contactus"].map(
              (id, index) => (
                <button
                  key={id}
                  className="text-gray-700 text-lg font-bold hover:text-blue-600 transition"
                  onClick={() => {
                    scrollToSection(id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {
                    [
                      "Home",
                      "Offerings",
                      "Industries",
                      "About Us",
                      "Contact Us",
                    ][index]
                  }
                </button>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
