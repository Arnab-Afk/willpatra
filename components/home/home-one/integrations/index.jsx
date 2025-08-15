import Icon10 from "@/public/images/v1/icon10.png";
import Image from "next/image";
import Link from "next/link";
import FadeInUp from "../../../animation/FadeInUp";

function Integrations() {
	return (
		<section className="sofax-section-padding2 dark-bg" id="integration">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<FadeInUp className="integration-social-icon">
							<Image src={Icon10} alt="Icon" />
						</FadeInUp>
					</div>
					<div className="col-lg-6">
						<div className="sofax-default-content tac light-color">
							<div className="tg-heading-subheading animation-style3">
								<h2>Seamless Integration with Trusted Advisors</h2>
							</div>
							<p>
								Connect with a curated network of legal, tax, and financial experts to ensure every aspect of your succession planning is covered.
							</p>
							<FadeInUp className="extra-mt">
								<Link
									className="sofax-default-btn pill"
									data-text="Explore Advisors"
									href="/contact-us"
								>
									<span className="button-wraper">Explore Advisors</span>
								</Link>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Integrations;
