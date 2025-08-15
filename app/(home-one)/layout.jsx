import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/one-page";
export const metadata = {
	title: "Willpatra || ",
	description: "Willpatra || ",
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
