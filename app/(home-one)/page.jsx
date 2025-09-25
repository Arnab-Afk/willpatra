import Cta from "@/components/home/home-one/cta";
import HeroSection from "@/components/home/home-one/hero";
import Integrations from "@/components/home/home-one/integrations";
import LogoSlider from "@/components/home/home-one/logo-slider";
import AboutTwo from "@/components/home/home-one/about-two/AboutTwo"
import PricePlan from "@/components/home/home-one/price-plan";
import Services from "@/components/home/home-one/services";
import Testimonial from "@/components/home/home-one/testimonial";
import WhyChooseUs from "@/components/home/home-one/why-choose-us";
import Features from "@/components/home/home-one/features";
import Solution from "@/components/home/home-one/solution";
import Problem from "@/components/home/home-one/problem";
import Heart from "@/components/home/home-one/heart";
import Probsol from "@/components/home/home-one/probsol";
import NewSolution from "@/components/home/home-one/newsolution";
import Trust from "@/components/home/home-one/hero/trust";
function HomeOne() {
	return (
		<>
			<HeroSection />
			{/* <LogoSlider /> */}
			<Heart />
			<Probsol />
			<NewSolution />
			<Trust />	
			{/* <WhyChooseUs /> */}
			<AboutTwo />
			{/* <Problem />
			<Solution /> */}
			<Services />
			<Features />
			
			<PricePlan />
			<Integrations />
			<Testimonial />
			<Cta />
		</>
	);
}

export default HomeOne;
