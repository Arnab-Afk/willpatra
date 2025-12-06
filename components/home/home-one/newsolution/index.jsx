import Icon1 from "@/public/images/v4/icon1.png";
import Icon2 from "@/public/images/v4/icon2.png";
import Icon3 from "@/public/images/v4/icon3.png";
import Thumb from "@/public/images/v4/servicethumb.png";
import Image from "next/image";
import Link from "next/link";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";
import FadeInLeft from "../../../animation/FadeInLeft";
function NewSolution() {
	return (
		<div className="sofax-section-padding3" style={{ paddingTop: '80px' }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<FadeInLeft className="sofax-content-thumb-v4 mr-80">
							<Image src={Thumb} alt="Thumb" />
						</FadeInLeft>
					</div>
					<div className="col-lg-6">
						<div className="sofax-default-content tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>The solution </h2>
								<h3>And that’s how WillPatra was born. </h3>
							</div>
							<blockquote>A platform built for peace.
								<br />A process designed for clarity.
								<br />A legacy protected for generations.</blockquote>
							<p style={{ marginTop: '20px' }}>
								We are not just a Will-making app but an entire platform built around Succession Planning that grows with you - everything from Will planning, Human Assistance to Transition of your Estate.
							</p>
							<p>
								Your smallest decision today protects a lifetime tomorrow.
							</p>
							<FadeInStaggerTwo className="sofax-hero-btn-wrap">
								<FadeInStaggerTwoChildren>
									<Link className="sofax-default-btn pill" data-text=" Create your Free Will Now" href="/contact-us">
										<span className="button-wraper"> Create your Free Will Now </span>
									</Link>
								</FadeInStaggerTwoChildren>
								<FadeInStaggerTwoChildren>
									<Link className="sofax-default-btn pill" data-text=" Explore all our Services" href="/contact-us">
										<span className="button-wraper"> Explore all our Services </span>
									</Link>
								</FadeInStaggerTwoChildren>
							</FadeInStaggerTwo>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
}

export default NewSolution;
