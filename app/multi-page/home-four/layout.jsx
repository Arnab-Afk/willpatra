import Footer from "@/components/home/home-four/footer";
import Header from "@/components/home/home-four/header/multi-page";
export const metadata = {
	title: "Willpatra || Responsive Next.js Template Home Four",
	description: "Willpatra || Responsive Next.js Template",
};
function LayoutFour({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutFour;
