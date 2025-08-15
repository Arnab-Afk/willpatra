import Footer from "@/components/home/home-one/footer";
import Header from "@/components/home/home-one/header/multi-page";
export const metadata = {
	title: "Willpatra || Responsive Next.js Template Home one",
	description: "Willpatra || Responsive Next.js Template",
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
