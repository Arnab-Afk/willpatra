import Footer from "@/components/home/home-five/footer";
import Header from "@/components/home/home-five/header/multi-page";
export const metadata = {
	title: "Willpatra || Responsive Next.js Template Home Five",
	description: "Willpatra || Responsive Next.js Template",
};
function LayoutFive({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutFive;
