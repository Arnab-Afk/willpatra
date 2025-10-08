"use client";
import Icon5 from "@/public/images/v4/icon5.png";
import Thumb from "@/public/images/v4/testimonialthumb.png";
import Image from "next/image";
import { useState } from "react";
import FadeInUp from "../../../animation/FadeInUp";
import ModalVideo from "react-modal-video";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
function Heart() {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
		<ModalVideo
				channel="youtube"
				youtube={{ autoplay: 0 }}
				isOpen={isOpen}
				videoId="XH_4rj-j0sU"
				onClose={() => setOpen(false)}
			/>
		<section className="sofax-section-padding2" id="testimonial">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInUp className="sofax-content-thumb-v4 ml-70 position-ralatiove ">
							<Image src={Thumb} alt="Thumb" onClick={() => setOpen(true)} />
							<div className="sofax-testimonial-shapev4">
								<Image src={Icon5} alt="Icon" />
							</div>
						</FadeInUp>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content testimonial-content-v4 tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>The Heart behind WillPatra</h2>
							</div>
							<p className="extra-mt">
								"At WillPatra, we don’t just digitize succession planning; we redesign the entire experience. We act as your <b>Planning Partners</b> that guide, manage, and coordinate every part of the process, so you’re never left figuring things out alone."
							</p>
						</div>
						<div className="sofax-testimonial-author-data-v4">
							<h4>Jinkan Khatadia</h4>
							<p>Founder</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	);
}

export default Heart;
