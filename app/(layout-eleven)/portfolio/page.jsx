import BreadCrumb from "@/components/common/Breadcrumb";
import Faq from "@/components/home/home-five/faq";
import dynamic from "next/dynamic";

const PortfolioList = dynamic(() => import("@/components/portfolio/PortfolioList"), {
	ssr: false,
});

export const metadata = {
	title: "Willpatra || Responsive Next.js Template Portfolio Page",
	description: "Willpatra || Responsive Next.js Template",
};
function PortfolioPage() {
	return (
		<>
			<BreadCrumb title="Our Portfolio" />
			<PortfolioList />
			<Faq />
		</>
	);
}

export default PortfolioPage;
