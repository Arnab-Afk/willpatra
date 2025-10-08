import Icon from "@/public/images/v3/Icon4.png";
import Thumb2Img from "@/public/images/v3/thumb2.png";
import Image from "next/image";
import FadeInLeft from "../../../animation/FadeInLeft";
import TextSplitFadeIn from "../../../animation/TextSplitFadeIn";
function Solution() {
	return (
		<section className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<FadeInLeft className="sofax-content-thumb mr-80 box-shadow">
							<Image src={Thumb2Img} alt="Thumb2Img" />
						</FadeInLeft>
					</div>
					<div className="col-lg-6">
						<div className="sofax-default-content tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>
									<TextSplitFadeIn> The Solution </TextSplitFadeIn>{" "}
								</h2>
							</div>
							<p>
								Will Patra isn’t just a tool; it’s a complete, end-to-end experience. Whether you want to start today, explore your options, or walk the full journey with support, we meet you where you are and grow with you as your life evolves. From the first clause of your Will to the last transfer of property, we make sure it all flows smoothly, legally, and with dignity. As they say, "A stitch in time saves nine".
							</p>
							<div className="sofax-list-icon-wrap">
								<div className="sofax-list-icon-icon">
									<ul>
										<li>
											<Image src={Icon} alt="Icon" />
											Regular team meetings
										</li>
										<li>
											<Image src={Icon} alt="Icon" />
											Clear communication
										</li>
									</ul>
								</div>
								<div className="sofax-list-icon-icon">
									<ul>
										<li>
											<Image src={Icon} alt="Icon" />
											Clear all project goals
										</li>
										<li>
											<Image src={Icon} alt="Icon" />
											Collaborative workspace
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Solution;
