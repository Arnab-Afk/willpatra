import Link from "next/link";
function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<Link className="sofax-default-btn pill sofax-header-btn white" data-text="Get started" href="/contact-us">
				<span className="button-wraper">Login</span>
			</Link>
		</div>
	);
}

export default HeaderButton;
