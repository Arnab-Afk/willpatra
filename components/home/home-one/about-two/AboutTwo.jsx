import IconCheck from "@/public/images/v10/icon5v6.png";
import Thumb from "@/public/images/v10/thumb3v10.png";
import Image from "next/image";
import FadeInRight from "../../../animation/FadeInRight";
function AboutTwo() {
	return (
		<section className="section sofax-section-padding2 bg-light">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="sofax-content-thumb-v10">
							<Image src={Thumb} alt="Thumb" />
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content mr-50">
							<div className="tg-heading-subheading animation-style3">
								<h2 className="tac">Where It All Began</h2>
							</div>
							<p className="tac">
								It all started with a father in India with two children overseas, and one big question: "How do I transfer everything smoothly, when my children aren’t even in the same country?" What followed was a maze of legal advisors, tax consultants, and cross-border confusion. The process was expensive, disjointed, and full of uncertainty. That’s when we realised: Estate planning doesn’t have to be this hard.
							</p>
							<div className="extra-mt">
								<div className="sofax-content-iconbox-wrap">
									<div className="sofax-iconbox-icon">
										<Image src={IconCheck} alt="check icon" />
									</div>
									<div className="sofax-iconbox-data">
										<h4>The Challenge</h4>
										<p>
											A father in India with overseas children faced the daunting task of transferring wealth smoothly across borders, leading to confusion and high costs.
										</p>
									</div>
								</div>
								<div className="sofax-content-iconbox-wrap">
									<div className="sofax-iconbox-icon">
										<Image src={IconCheck} alt="check icon" />
									</div>
									<div className="sofax-iconbox-data">
										<h4>The Realization</h4>
										<p>
											We realized estate planning doesn’t have to be this hard, prompting us to create a better solution for families everywhere.
										</p>
									</div>
								</div>
								<div className="sofax-content-iconbox-wrap">
									<div className="sofax-iconbox-icon">
										<Image src={IconCheck} alt="check icon" />
									</div>
									<div className="sofax-iconbox-data">
										<h4>Building WillPatra</h4>
										<p>
											We built WillPatra to blend expert support and intuitive technology, helping families protect generational wealth without fear or chaos.
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

export default AboutTwo;
