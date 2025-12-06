import Thumb from "@/public/images/v5/aboutthumb.png";
import Shape from "@/public/images/v5/shape2.png";
import Image from "next/image";
import Link from "next/link";
import FadeInLeft from "../../../animation/FadeInLeft";
import FadeInUp from "../../../animation/FadeInUp";
import AboutCounter from "./Counter";
function AboutOne() {
	return (
		<section className="section sofax-section-padding2 position-ralatiove">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<FadeInLeft className="about-thumbv5 mr-80 ">
							<Image src={Thumb} alt="Thumb" />
						</FadeInLeft>
					</div>
					<div className="col-lg-6">
						<div className="sofax-default-content tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>Who We Are</h2>
							</div>
							<p>
								WillPatra is India’s first guided digital platform for stress-free Will & succession planning. We combine expert support with simple technology to make one of life’s most emotional decisions more comforting, clear, and secure.
							</p>
							<h4>Our Mission:</h4>
							<p>
								To empower every Indian family to protect their legacy with confidence—not fear.
								<br/>No complicated language. No hidden costs. Just guidance, clarity, and peace of mind.
								<br/>You plan your life. We help you protect it.

							</p>
							{/* <AboutCounter /> */}

							<FadeInUp className="extra-mt tac3">
								<Link className="sofax-default-btn pill" data-text="Contact Us" href="/contact-us">
									<span className="button-wraper">Contact Us</span>
								</Link>
							</FadeInUp>
							<div className="sofax-about-shapev5">
								<Image src={Shape} alt="Shape" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutOne;
