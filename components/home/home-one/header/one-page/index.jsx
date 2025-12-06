"use client";
import MobileNavbar from "@/components/common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "../HeaderButton";
import HeaderLogo from "../HeaderLogo";
import { useEffect, useState } from "react";
const menuItemsData = [
	{
		title: "Home",
		url: "#hero",
	},
	{
		title: "Service",
		url: "#service",
	},
	{
		title: "Pricing",
		url: "#pricing",
	},
	{
		title: "Integration",
		url: "#integration",
	},
	{
		title: "Testimonial",
		url: "#testimonial",
	},
];
function Header() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 100) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		
		// Cleanup function
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header 
			className={`site-header sofax-header-section site-header--menu-center ${isScrolled ? 'sticky-menu bg-semi-transparent' : 'bg-transaparent'}`} 
			id="sticky-menu"
		>
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<nav className="menu-block" id="append-menu-header">
							<ul className="site-menu-main">
								<li className="nav-item">
									<a href="#hero" className="nav-link-item">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a href="#service" className="nav-link-item">
										Products & Services
									</a>
								</li>
								<li className="nav-item">
									<a href="#about-us" className="nav-link-item">
										About Us
									</a>
								</li>
								<li className="nav-item">
									<a href="#cta" className="nav-link-item">
										Contact Us
									</a>
								</li>
								<li className="nav-item">
									<a href="#testimonial" className="nav-link-item">
										Testimonial
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<HeaderButton />

					<MobileNavbar menuItemsData={menuItemsData} title="" onePage={true} />
				</nav>
			</div>
		</header>
	);
}

export default Header;
