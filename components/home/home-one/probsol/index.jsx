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
								<h2>The Problem</h2>
							</div>
							<p>
								For most people, making a will or setting up an estate plan feels complicated, expensive, and emotionally overwhelming. So they postpone it until it's too late.
							</p>
							<p>
								The existing solutions are fragmented, overly transactional, and rarely built for evolving, cross-border families. They lead to generations of loved ones left to deal with preventable conflict, confusion, and legal chaos. 
							</p>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Probsol;
