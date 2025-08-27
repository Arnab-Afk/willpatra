import Icon1 from "@/public/images/v2/icon1.png";
import Icon2 from "@/public/images/v2/icon2.png";
import Icon4 from "@/public/images/v2/icon4.png";
import Icon5 from "@/public/images/v2/icon5.png";
import Phone from "@/public/images/v2/phone.png";
import Image from "next/image";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";
import FadeInUp from "../../../animation/FadeInUp";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";

function Features() {
	return (
		<section className=" section sofax-section-padding" id="features">
			<div className="sofax-section-title center">
				<div className="tg-heading-subheading ">
					<h2>
						<TextSplitFadeIn>Features That Redefine Succession Planning</TextSplitFadeIn>
					</h2>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="row">
						<FadeInStaggerTwo className="col-lg-4 col-md-12">
							<FadeInStaggerTwoChildren className="sofax-features-box">
								<div className="sofax-features-icon">
									<Image src={Icon1} alt="features" />
								</div>
								<div className="sofax-features-content">
									<h4>Video Declarations</h4>
									<p>
										Add a personal touch to your Will with secure video declarations for clarity and authenticity.
									</p>
								</div>
							</FadeInStaggerTwoChildren>
							<FadeInStaggerTwoChildren className="sofax-features-box">
								<div className="sofax-features-icon">
									<Image src={Icon2} alt="Feature" />
								</div>
								<div className="sofax-features-content">
									<h4>Automatic Notifications</h4>
									<p>
										Ensure executors and beneficiaries are informed promptly with automated notifications.
									</p>
								</div>
							</FadeInStaggerTwoChildren>
						</FadeInStaggerTwo>
						<div className="col-lg-4 col-md-12">
							<FadeInUp className="sofax-features-box features-v2 position-relative">
								<div className="sofax-features-icon">
									<Image src={Icon5} alt="Features Icon" />
								</div>
								<div className="sofax-features-content">
									<h4>Secure Storage</h4>
									<p>
										Your documents are encrypted and securely stored, ensuring complete privacy and peace of mind.
									</p>
								</div>
								<div className="sofax-features-thumb">
									<Image src={Phone} alt="Phone" />
								</div>
							</FadeInUp>
						</div>
						<FadeInStaggerTwo className="col-lg-4 col-md-12">
							<FadeInStaggerTwoChildren className="sofax-features-box">
								<div className="sofax-features-icon">
									<Image src={Icon4} alt="Feature Ion" />
								</div>
								<div className="sofax-features-content">
									<h4>Global Advisor Network</h4>
									<p>
										Access a curated network of domestic and cross-border advisors for expert guidance.
									</p>
								</div>
							</FadeInStaggerTwoChildren>
							<div className="sofax-features-box">
								<div className="sofax-features-icon">
									<Image src={Icon5} alt="Icon 5" />
								</div>
								<div className="sofax-features-content">
									<h4>Transparent Pricing</h4>
									<p>
										Flat fees with no hidden costs, so you always know what to expect.
									</p>
								</div>
							</div>
						</FadeInStaggerTwo>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Features;
