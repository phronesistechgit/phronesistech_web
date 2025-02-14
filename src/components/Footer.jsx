import React from "react";

const Footer = () => {
	return (
		<footer className="bg-[#007CC2] text-white mt-10">
			{/* Main Content */}
			<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
				{/* Quick Links */}
				<div className="space-y-4">
					<h3 className="font-semibold text-xl mb-6">Quick Links</h3>
					<ul className="space-y-3 text-lg">
						{[
							"Home",
							"Offerings",
							"Industries",
							"About Us",
							"Contact Us",
						].map((link) => (
							<li key={link}>
								<a
									href="#"
									className="hover:text-[#002F6C] transition duration-300">
									{link}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Follow Us */}
				<div className="space-y-6">
					<h3 className="font-semibold text-xl mb-6">Follow Us</h3>
					<div className="flex space-x-6">
						{["Facebook", "Twitter", "LinkedIn"].map((platform) => (
							<a
								key={platform}
								href="#"
								className="text-lg hover:text-[#002F6C] transition duration-300">
								{/* Icons for Facebook, Twitter, LinkedIn */}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 24 24"
									className="w-7 h-7">
									{platform === "Facebook" && (
										<path d="M22.675 0h-21.35c-.735 0-1.325.59-1.325 1.325v21.351c0 .735.59 1.324 1.325 1.324h11.496v-9.294h-3.118v-3.622h3.118v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.465.098 2.795.143v3.243h-1.918c-1.504 0-1.795.715-1.795 1.763v2.309h3.587l-.467 3.622h-3.12v9.294h6.116c.735 0 1.325-.589 1.325-1.324v-21.351c0-.735-.59-1.325-1.325-1.325z" />
									)}
									{platform === "Twitter" && (
										<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.717 0-4.917 2.2-4.917 4.917 0 .386.044.762.128 1.124-4.083-.205-7.702-2.159-10.125-5.132-.423.725-.666 1.561-.666 2.457 0 1.695.863 3.188 2.175 4.065-.801-.026-1.555-.246-2.212-.614v.062c0 2.366 1.683 4.342 3.918 4.79-.41.111-.843.171-1.287.171-.315 0-.624-.031-.924-.088.625 1.956 2.444 3.379 4.6 3.418-1.683 1.319-3.809 2.105-6.115 2.105-.398 0-.79-.023-1.175-.068 2.179 1.397 4.768 2.213 7.548 2.213 9.055 0 14.01-7.502 14.01-14.01 0-.213-.005-.426-.015-.637.962-.694 1.797-1.56 2.457-2.548l-.047-.02z" />
									)}
									{platform === "LinkedIn" && (
										<path d="M22.23 0h-20.46c-.974 0-1.77.795-1.77 1.77v20.46c0 .974.796 1.77 1.77 1.77h20.46c.975 0 1.77-.796 1.77-1.77v-20.46c0-.975-.795-1.77-1.77-1.77zm-14.769 20.452h-3.092v-10.831h3.092v10.831zm-1.541-12.411c-.99 0-1.797-.806-1.797-1.796 0-.99.807-1.797 1.797-1.797.99 0 1.797.807 1.797 1.797 0 .99-.807 1.796-1.797 1.796zm15.082 12.411h-3.091v-5.545c0-1.322-.027-3.025-1.846-3.025-1.846 0-2.128 1.442-2.128 2.932v5.638h-3.091v-10.831h2.968v1.479h.042c.413-.781 1.426-1.604 2.936-1.604 3.138 0 3.715 2.065 3.715 4.754v6.202z" />
									)}
								</svg>
							</a>
						))}
					</div>
				</div>

				{/* Contact Info */}
				<div className="space-y-2">
					<h3 className="font-semibold text-xl mb-6">Contact Info</h3>
					<p className="text-lg underline">
						<a href="mailto:sales@phronesistech.io">
							sales@phronesistech.io
						</a>
					</p>
					<p className="text-lg underline">
						<a href="mailto:crm@phronesistech.io">
							crm@phronesistech.io
						</a>
					</p>
					<p className="text-lg">
						<a
							target="_blank"
							href="https://maps.app.goo.gl/NDYWtHfLDV2YzxBPA">
							125, NCC Urban Green Province, Sarjapura, Bengaluru
							562125
						</a>
					</p>
					<p className="text-lg">
						<a
							target="_blank"
							href="https://maps.app.goo.gl/M7UPEkoxBEAZRgnr9">
							5, Palmer Lane Acton, MA, 01720, USA
						</a>
					</p>
				</div>
			</div>

			{/* Bottom Section - Copyright */}
			<div className="text-center py-6 bg-[#005E9C] border-t border-[#004A7A]">
				<p className="text-sm text-gray-100">
					© 2025 PhronesisTech. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
