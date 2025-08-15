import Footer from "@/components/home/home-eight/footer";
import Header from "@/components/home/home-eight/header/multi-page";
export const metadata = {
	title: "Willpatra || Responsive Next.js Template Home Eight",
	description: "Willpatra || Responsive Next.js Template",
};
function LayoutEight({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutEight;
