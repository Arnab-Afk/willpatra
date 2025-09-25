import Icon1 from "@/public/images/v10/icon4v10.png";
import Icon2 from "@/public/images/v10/icon5v10.png";
import Thumb from "@/public/images/v10/thumb2v10.png";
import Image from "next/image";
import Link from "next/link";
import FadeInUp from "../../../../animation/FadeInUp";
function Trust() {
	return (
		<div className="sofax-section-padding2 bg-light">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInUp className="sofax-content-thumb-v10">
							<Image src={Thumb} alt="thumb" />
						</FadeInUp>
					</div>
					<div className="col-lg-7">
						<div className="sofax-default-content tac ml-80">
							<div className="tg-heading-subheading animation-style3">
								<h2>Who are we: </h2>
							</div>
							<p>
								Will Patra is your trusted companion in the world of succession planning (a space too often clouded by confusion, anxiety, and delay). We're reimagining it with clarity, ease, and care. Our mission is simple: 
							</p>
							<h5>
								Make planning for the future feel as natural and empowering as planning for your day tomorrow.
							</h5>
							<p style={{marginTop: '20px'}}>
								With a smart blend of intuitive technology and human support, Will Patra helps families take control of what matters most to them: the protection of generational wealth and the security of their family.
							</p>
						</div>
						<div className="extra-mt ml-70">
							
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Trust;
