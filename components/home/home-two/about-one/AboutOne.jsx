import Thumb2 from "@/public/images/v2/contentthumb2.png";
import Icon6 from "@/public/images/v2/icon6.png";
import Icon7 from "@/public/images/v2/icon7.png";
import Icon8 from "@/public/images/v2/icon8.png";
import Image from "next/image";
import FadeInRight from "../../../animation/FadeInRight";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
function AboutOne() {
	return (
		<section className="section sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="about-thumb ml-50">
							<Image src={Thumb2} alt="Thumb2" />
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content">
							<div className="tg-heading-subheading ">
								<h2 className="tac">
									<TextSplitFadeIn> Secure Your Legacy Anytime, Anywhere with WillPatra</TextSplitFadeIn>
								</h2>
							</div>
							<p className="tac">
								Our user-friendly platform is designed for convenience, ensuring you can plan your succession & manage your legacy effortlessly anytime anywhere.
							</p>
							<div className="extra-mt">
								<div className="sofax-content-iconbox-wrap">
									<div className="sofax-iconbox-icon">
										<Image src={Icon6} alt="Icon6" />
									</div>
									<div className="sofax-iconbox-data">
										<h4>Expert Guidance and Support</h4>
										<p>
											Connect with our curated network of global advisors for legal, tax, and financial expertise. We guide you through every step of succession planning.
										</p>
									</div>
								</div>
								<div className="sofax-content-iconbox-wrap">
									<div className="sofax-iconbox-icon">
										<Image src={Icon7} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data">
										<h4>Your Data is Fully Protected</h4>
										<p>
											Robust security features, such as encryption and secure storage, to protect your documents and personal information with complete privacy.
										</p>
									</div>
								</div>
								<div className="sofax-content-iconbox-wrap">
									<div className="sofax-iconbox-icon">
										<Image src={Icon8} alt="Icon" />
									</div>
									<div className="sofax-iconbox-data">
										<h4>Transparent Fees and No Surprises</h4>
										<p>
											With a flat, transparent fee and no hidden costs, you always know what to expect. Get the help you need when you need it.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutOne;
