"use client";
import Icon5 from "@/public/images/v4/icon5.png";
import Thumb from "@/public/images/v4/founders.png";
import Image from "next/image";
import { useState } from "react";
import FadeInUp from "../../../animation/FadeInUp";
import ModalVideo from "react-modal-video";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "@/components/animation/FadeInStaggerTwo";
import Link from "next/link";
function Challenge() {
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
						<div className="sofax-default-content tac">
							<div className="tg-heading-subheading animation-style3">
								<h2>The Challenge</h2>
							</div>
							<p>
								For many families, making a Will feels like staring at a mountain:<br/>
                                <br/><b><i>Where do I start? Who do I trust? What if I make a mistake?</i></b>
                                <br/><br/>So it gets pushed to “later”.
                                <br/>Later becomes months. Sometimes years.
                                <br/>And then one day, it’s too late.
                                <br/><br/><b>The result?</b>
                                <br/>Loved ones left managing complications that could have been avoided with a little help and planning.
                                <br/>
    
							</p>
                            <blockquote>"Succession Planning Matters! "</blockquote>
                            <p>
                                Will-making shouldn’t feel heavy or intimidating. It should be an expression of your care for your loved ones.<br/>
                                <br/>Ready to get started?

                            </p>
                            <Link className="sofax-default-btn pill" data-text=" Create your Free Will Now" href="/contact-us">
						<span className="button-wraper"> Create your Free Will Now </span>
					</Link>
						</div>
                        
						<div className="sofax-default-content testimonial-content-v4 tac">
							
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
	);
}

export default Challenge;
