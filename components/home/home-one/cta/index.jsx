import Shape4 from "@/public/images/v1/shape4.png";
import Image from "next/image";
import Link from "next/link";
import FadeInUp from "../../../animation/FadeInUp";
function Cta() {
	return (
		<section className="sofax-section-padding2 bg-light">
			<div className="container">
				<div className="sofax-cta-content">
					<div className="tg-heading-subheading animation-style3">
						<h2>Start Your Succession Journey Today</h2>
					</div>
					<p>
						Take control of your legacy with WillPatra. Plan, protect, and pass on what matters most with ease and
						confidence.
					</p>
					<FadeInUp className="extra-mt">
						<Link className="sofax-default-btn pill" data-text="Get Started Now" href="/sign-up">
							<span className="button-wraper">Get Started Now</span>
						</Link>
						<span className="cta-bottom">No hidden fees. Your journey starts here.</span>
					</FadeInUp>
					<div className="sofax-cta-shape">
						<Image src={Shape4} alt="Shape" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cta;
