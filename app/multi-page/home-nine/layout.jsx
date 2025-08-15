import Footer from "@/components/home/home-nine/footer";
import Header from "@/components/home/home-nine/header/multi-page";
export const metadata = {
	title: "Willpatra || Responsive Next.js Template Home Nine",
	description: "Willpatra || Responsive Next.js Template",
};
function LayoutNine({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutNine;
