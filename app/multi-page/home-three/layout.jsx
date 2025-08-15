import Footer from "@/components/home/home-three/footer";
import Header from "@/components/home/home-three/header/multi-page";
export const metadata = {
	title: "Willpatra || Responsive Next.js Template Home Three",
	description: "Willpatra || Responsive Next.js Template",
};
function LayoutThree({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default LayoutThree;
