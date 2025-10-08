import image1 from "@/public/images/service/image1.png";
import image2 from "@/public/images/service/image2.png";
import image3 from "@/public/images/service/image3.png";
import FadeInStagger from "../../animation/FadeInStagger";
import ServiceCard from "./ServiceCard";

const servicesData = [
	{
		id: crypto.randomUUID(),
		title: "Will Creation",
		description:
			"Protect your legacy and your loved ones with our intuitive and secure Will creation platform.",
		icon: image1,
	},
	{
		id: crypto.randomUUID(),
		title: "Succession Planning",
		description:
			"Optimize the value of your wealth with expert-led, tailored succession planning solutions.",
		icon: image2,
	},
	{
		id: crypto.randomUUID(),
		title: "Transition Assistance",
		description:
			"Ensure smooth and precise execution of your wishes with our trusted network of experts.",
		icon: image3,
	},
];

function Services() {
	return (
		<section className="sofax-section-padding">
			<div className="container">
				<div className="row">
					<div className="sofax-section-title center">
						<h2>Explore Our Services</h2>
					</div>
					{servicesData.map((service, index) => (
						<FadeInStagger key={service.id} index={index} className="col-lg-6">
							<ServiceCard service={service} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
