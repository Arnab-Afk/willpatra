import Footer from "@/components/home/home-two/footer";
import Header from "@/components/home/home-two/header/multi-page";
export const metadata = {
	title: "WillPatra - Will Creation",
	description: "Create your will easily with WillPatra. Choose between FREE DIY Will or SmartWill Assistance.",
};
function LayoutTwo({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutTwo;
