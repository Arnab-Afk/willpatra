import Card from "@/public/images/v1/card.png";
import CheckCircle from "@/public/images/v1/check-circle.png";
import Contentimg2 from "@/public/images/v1/contentimg2.png";
import ContentThumb from "@/public/images/v1/contentthumb1.png";
import Icon4 from "@/public/images/v1/icon4.png";
import Icon9 from "@/public/images/v1/icon9.png";
import Shape3 from "@/public/images/v1/shape3.png";
import Image from "next/image";
import Link from "next/link";
import FadeInLeft from "../../../animation/FadeInLeft";
import FadeInRight from "../../../animation/FadeInRight";
import FadeInUp from "../../../animation/FadeInUp";
function WhyChooseUs() {
	return (
		<div className="sofax-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="sofax-content-img box-shadow mb-130">
							<Image src={ContentThumb} alt="ContentThumb" />
							<div className="sofax-card-shape">
								<Image src={Card} alt="Card" />
							</div>
						</FadeInLeft>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content tac ml-50 mb-130 animation-title animation-style3">
							<div className="tg-heading-subheading animation-style3">
								<h2>The Heart Behind WillPatra</h2>
							</div>
							<p>
								WillPatra is your trusted companion in the world of succession planning, reimagining it with clarity, ease, and care. Our mission is simple: Make planning for the future feel as natural and empowering as planning for your day tomorrow. With a smart blend of intuitive technology and human support, WillPatra helps families take control of what matters most to them: the protection of generational wealth and the security of their family.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-2">
						<FadeInRight className="sofax-content-img2 position-ralatiove ml-31">
							<Image src={Contentimg2} alt="Thumbs" />
							<div className="sofax-content-shape-v1">
								<Image src={Shape3} alt="shape" />
							</div>
						</FadeInRight>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content mr-80 tac fs-19">
							<div className="tg-heading-subheading animation-style3">
								<h2>Why Trust WillPatra?</h2>
							</div>
							<p>
								At WillPatra, we don’t just digitize succession planning; we redesign the entire experience. We act as your Planning Partners that guide, manage, and coordinate every part of the process, so you’re never left figuring things out alone. Our curated network of global advisors, both domestic and cross-border, steps in when needed, ensuring you get the right advice without any overwhelm. With a flat, transparent fee and no hidden costs, you always know what to expect. Your data is protected, with every document securely stored and encrypted to ensure complete privacy and peace of mind. Features like Video Declarations and automatic notifications for executors and beneficiaries ensure your Will is not just legally clear, but emotionally and practically complete.
							</p>
							<FadeInUp className="extra-mt">
								
							</FadeInUp>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhyChooseUs;
