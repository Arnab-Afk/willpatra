import Icon from "@/public/images/v2/icon9.png";
import Image from "next/image";
function FaqAccordion() {
	return (
		<div className="sofax-accordion-section-wrapper">
			<div className="accordion sofax-accordion-section-v2" id="sofax-accordion2">
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
						>
							What is WillPatra?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div
						id="collapseOne"
						className="accordion-collapse collapse show"
						data-bs-parent="#sofax-accordion2"
					>
						<div className="accordion-body sofax-accordion-body">
							WillPatra is India's first guided digital platform for stress-free Will & succession planning. We combine expert support with simple technology to make one of life's most emotional decisions more comforting, clear, and secure.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
						>
							Is creating a Will legally valid?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion2">
						<div className="accordion-body sofax-accordion-body">
							Yes, a Will created through WillPatra is legally valid under Indian law. Our platform ensures compliance with the Indian Succession Act, and our legal experts review each document to ensure it meets all legal requirements.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
						>
							How do I get started with WillPatra?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion2">
						<div className="accordion-body sofax-accordion-body">
							Getting started is simple. Sign up on our platform, answer a few guided questions about your assets and beneficiaries, and our system will help you draft your Will. Expert support is available at every step.
						</div>
					</div>
				</div>
			</div>
			<div className="accordion sofax-accordion-section-v2 mt-24" id="sofax-accordion3">
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFour"
						>
							Who can help me if I have questions?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div
						id="collapseFour"
						className="accordion-collapse collapse show"
						data-bs-parent="#sofax-accordion3"
					>
						<div className="accordion-body sofax-accordion-body">
							Our team of legal experts and succession planning advisors are available to assist you throughout the process. You can reach out through chat, email, or schedule a consultation for personalized guidance.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseFive"
						>
							Can I update my Will after creating it?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion3">
						<div className="accordion-body sofax-accordion-body">
							Absolutely! You can update your Will anytime through our platform as your life circumstances change. We recommend reviewing your Will periodically to ensure it reflects your current wishes and assets.
						</div>
					</div>
				</div>
				<div className="accordion-item sofax-accordion-item ">
					<h3 className="accordion-header sofax-accordion-header">
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseSix"
						>
							How secure is my information on WillPatra?
						</button>
						<div className="accordion-icon">
							<Image src={Icon} alt="Icon" />
						</div>
					</h3>
					<div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#sofax-accordion3">
						<div className="accordion-body sofax-accordion-body">
							Your privacy and security are our top priorities. We use bank-level encryption and secure servers to protect your sensitive information. Your data is confidential and accessible only to you and authorized personnel.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FaqAccordion;
