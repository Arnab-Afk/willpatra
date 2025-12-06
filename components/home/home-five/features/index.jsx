"use client";
import Icon1 from "@/public/images/v5/icon1.png";
import Icon2 from "@/public/images/v5/icon2.png";
import Icon3 from "@/public/images/v5/icon3.png";
import FeatureCard from "./FeatureCard";
const featuresData = [
	{
		id: crypto.randomUUID(),
		icon: Icon1,
		title: "Safe, Secure & Private from Day 1",
		description:
			"Bank-level encryption and secure servers protect your sensitive information from the moment you start.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon2,
		title: "Simple Step-by-Step Guided Flow",
		description:
			"Easy-to-follow guidance makes Will creation stress-free and straightforward for everyone.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon3,
		title: "Create and Update Your Will Free—Forever",
		description:
			"No hidden costs, no subscriptions. Create and modify your Will anytime, completely free.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon1,
		title: "SmartWill Assistance",
		description:
			"Expert support available whenever you need it, ensuring your Will is comprehensive and accurate.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon2,
		title: "Built by Legal + Tech Professionals",
		description:
			"Trusted platform developed by experienced lawyers and technology experts working together.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon3,
		title: "Senior-Friendly Experience",
		description:
			"Designed for ease of use with human help available on demand whenever you need assistance.",
	},
];
function Features() {
	return (
		<section className="section sofax-section-padding bg-light" id="features">
			<div className="container">
				<div className="sofax-section-title center max-width-large">
					<div className="tg-heading-subheading animation-style3">
						<h2>Why Choose WillPatra</h2>
					</div>
				</div>
				<div className="marquee-wrapper">
					<div className="marquee-content">
						{[...featuresData, ...featuresData].map((feature, index) => (
							<div key={`${feature.id}-${index}`} className="marquee-item">
								<FeatureCard feature={feature} />
							</div>
						))}
					</div>
				</div>
			</div>
			<style jsx>{`
				.marquee-wrapper {
					overflow: hidden;
					position: relative;
					width: 100%;
				}
				.marquee-content {
					display: flex;
					gap: 24px;
					animation: marquee 40s linear infinite;
				}
				.marquee-item {
					flex: 0 0 350px;
					min-width: 350px;
				}
				@keyframes marquee {
					0% {
						transform: translateX(0);
					}
					100% {
						transform: translateX(-50%);
					}
				}
				.marquee-content:hover {
					animation-play-state: paused;
				}
			`}</style>
		</section>
	);
}

export default Features;
