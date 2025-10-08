import Icon1 from "@/public/images/v4/icon1.png";
import Icon2 from "@/public/images/v4/icon2.png";
import Icon3 from "@/public/images/v4/icon3.png";
import Thumb from "@/public/images/v4/servicethumb.png";
import Image from "next/image";
import FadeInLeft from "../../../animation/FadeInLeft";
function NewSolution() {
	return (
		<div className="sofax-section-padding3" style={{paddingTop: '80px'}}>
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
								<h3><b>WillPatra</b> isn’t just a tool; it’s a complete, end-to-end experience. </h3>
							</div>
							<p style={{marginTop: '20px'}}>
								Whether you want to start today, explore your options, or walk the full journey with support, we meet you where you are and grow with you as your life evolves.
							</p>
							<p>
								From the first clause of your will to the last transfer of property, we make sure it all flows smoothly, legally, and with dignity. As they say, “<b>A stitch in time saves nine</b>.”
							</p>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default NewSolution;
