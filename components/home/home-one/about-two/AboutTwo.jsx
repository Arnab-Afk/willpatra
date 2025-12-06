import Thumb from "@/public/images/v10/thumb3v10.png";
import Image from "next/image";
import FadeInRight from "../../../animation/FadeInRight";

function AboutTwo() {
    return (
        <section className="section sofax-section-padding2 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 order-lg-2">
                        <FadeInRight className="sofax-content-thumb-v10">
                            <Image src={Thumb} alt="Thumb" />
                        </FadeInRight>
                    </div>
                    <div className="col-lg-7">
                        <div className="sofax-default-content mr-50">
                            <div className="tg-heading-subheading animation-style3">
                                <h2 className="tac">Why Choose WillPatra</h2>
                            </div>
                            <p className="tac">
                                You maintain complete control over your estate and succession planning
                            </p>
                            <div className="extra-mt">
                                <div className="sofax-content-iconbox-wrap">
                                    {/* <div className="sofax-iconbox-icon">
                                        <Image src="/images/icons/bell.png" alt="challenge icon" width={32} height={32} />
                                    </div> */}
                                    <div className="sofax-iconbox-data">
                                        <h4>Update Anytime</h4>
                                        <p>
                                            Create & Update your Will & Estate anytime for <b>free</b>
                                        </p>
                                    </div>
                                </div>
                                <div className="sofax-content-iconbox-wrap">
                                    <div className="sofax-iconbox-data">
                                        <h4>Video Declarations</h4>
                                        <p>
                                            Add a video message to your Will for additional safety so there’s no confusion later.
                                        </p>
                                    </div>
                                </div>
                                <div className="sofax-content-iconbox-wrap">
                                    <div className="sofax-iconbox-data">
                                        <h4>Keep Loved-ones Informed</h4>
                                        <p>
                                            Executors and Beneficiaries are informed about your Will at your discretion; no chasing after people or missed assets
                                        </p>
                                    </div>
                                </div>
                                <div className="sofax-content-iconbox-wrap">
                                    <div className="sofax-iconbox-data">
                                        <h4>Estate Transition</h4>
                                        <p>
                                            Ensure smooth, efficient transfer of your estate when the time comes
                                        </p>
                                    </div>
                                </div>
                                <div className="sofax-content-iconbox-wrap">
                                    <div className="sofax-iconbox-data">
                                        <h4>Safe and Secure</h4>
                                        <p>
                                            Built with privacy and protection at the core
                                        </p>
                                    </div>
                                </div>
                                <div className="sofax-content-iconbox-wrap">
                                    <div className="sofax-iconbox-data">
                                        <h4>Clear Process</h4>
                                        <p>
                                            Personalised, Step-by-Step Guidance designed for you
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutTwo;