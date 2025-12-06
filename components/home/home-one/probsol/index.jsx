import Thumb from "@/public/images/v4/aboutthumb.png";
import Image from "next/image";
import Link from "next/link";
import FadeInRight from "../../../animation/FadeInRight";
import FadeInUp from "../../../animation/FadeInUp";
function Probsol() {
	return (
		<section className="sofax-section-padding2 bg-light">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="sofax-content-thumb-v4 ">
							<Image src={Thumb} alt="Thumbs" />
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content mr-90 fs-19 tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>WillPatra's Story</h2>
							</div>
							<h4>The inspiration behind WillPatra began with a simple, real story:</h4>
							<p>
								A father in India wanted to smoothly pass on his hard-earned wealth to his children living abroad, only to discover a maze of conflicting advice, excessive paperwork, unclear rules and high costs							</p>
							<p>
								We realised it shouldn’t be difficult, so we built a simple, guided and <b>free</b> succession planning platform for everyone.
							</p>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Probsol;
