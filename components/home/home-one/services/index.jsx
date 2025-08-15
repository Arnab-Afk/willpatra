import Icon1 from "@/public/images/v1/icon1.png";
import Icon2 from "@/public/images/v1/icon2.png";
import Icon3 from "@/public/images/v1/icon3.png";
import Link from "next/link";
import FadeInStagger from "../../../animation/FadeInStagger";
import FadeInUp from "../../../animation/FadeInUp";
import ServiceCard from "./ServiceCard";

const servicesData = [
	{
		id: crypto.randomUUID(),
		icon: Icon1,
		title: "Will Creation",
		description:
			"Protect your legacy and your loved ones with our intuitive and secure Will creation platform.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon2,
		title: "Succession Planning",
		description:
			"Optimize the value of your wealth with expert-led, tailored succession planning solutions.",
	},
	{
		id: crypto.randomUUID(),
		icon: Icon3,
		title: "Transition Assistance",
		description:
			"Ensure smooth and precise execution of your wishes with our trusted network of experts.",
	},
];

function Services() {
	return (
		<div className="section sofax-section-padding bg-light" id="service">
			<div className="container">
				<div className="sofax-section-title max-width-770 ">
					<div className="row">
						<div className="col-xl-8 col-lg-8">
							<div className="tg-heading-subheading animation-style3">
								<h2>Explore Our Comprehensive Services</h2>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 d-flex justify-content-end align-items-center">
							<FadeInUp className="sofax-title-btn">
								<Link className="sofax-default-btn pill" data-text="View all services" href="/service">
									<span className="button-wraper">View all services</span>
								</Link>
							</FadeInUp>
						</div>
					</div>
				</div>

				<div className="row">
					{servicesData.map((item, index) => (
						<FadeInStagger key={item.id} index={index} className="col-xl-4 col-md-6">
							<ServiceCard service={item} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</div>
	);
}

export default Services;
