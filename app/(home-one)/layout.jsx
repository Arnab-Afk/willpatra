import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/one-page";
export const metadata = {
	title: "WillPatra - Will-making for the 21st Century ",
	description: "WillPatra - Will-making for the 21st Century ",
};
function LayoutOne({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutOne;
