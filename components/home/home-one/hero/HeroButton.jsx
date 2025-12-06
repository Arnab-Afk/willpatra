"use client";
import Shape1 from "@/public/images/v3/shape1.png";
import PlayBtn from "@/public/images/v3/play-24.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../../animation/FadeInStaggerTwo";

function HeroButton() {
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

			<FadeInStaggerTwo className="sofax-hero-btn-wrap">
				<FadeInStaggerTwoChildren>
					<Link className="sofax-default-btn pill" data-text=" Create your Free Will Now" href="/contact-us">
						<span className="button-wraper"> Create your Free Will Now </span>
					</Link>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<button className="sofax-popup-video video-init" onClick={() => setOpen(true)}>
						<Image src={PlayBtn} alt="Play Btn" />
						Watch A Demo
					</button>
					{/* <div className="hero3-shape">
						<Image src={Shape1} alt="Shape1" />
					</div> */}
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</>
	);
}

export default HeroButton;
