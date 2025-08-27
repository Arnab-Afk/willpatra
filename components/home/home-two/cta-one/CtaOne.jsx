import Thumb2 from "@/public/images/v2/contentthumb2.png";
import Image from "next/image";
import Link from "next/link";
import FadeInLeft from "../../../animation/FadeInLeft";
import FadeInUp from "../../../animation/FadeInUp";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
function CtaOne() {
	return (
		<section className="section sofax-section-padding2 bg-light">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="about-thumb mr-50 ">
							<Image src={Thumb2} alt="Thumbs 2" />
						</FadeInLeft>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content tac">
							<div className="tg-heading-subheading ">
								<h2>
									<TextSplitFadeIn>
										Create Your Will with Ease and Confidence
									</TextSplitFadeIn>
								</h2>
							</div>
							<p>
								The Will to Make Life Easier. Where there’s a Will, there’s a smarter way - independently or expertly guided. Our platform is designed to take the overwhelm out of Will-making.
							</p>
							<p>
								Whether you're planning ahead or catching up, we guide you step-by-step with built-in explanations and secure storage. It’s your Will, your way.
							</p>
							<FadeInUp className="extra-mt">
								<Link className="sofax-default-btn pill" data-text="Create Now" href="/will-creation">
									<span className="button-wraper">Create Now</span>
								</Link>
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CtaOne;
