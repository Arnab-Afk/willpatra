import Footer from "@/components/home/home-six/footer";
import Header from "@/components/home/home-six/header/multi-page";
export const metadata = {
	title: "Willpatra || Responsive Next.js Template Home Six",
	description: "Willpatra || Responsive Next.js Template",
};
function LayoutSix({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutSix;
