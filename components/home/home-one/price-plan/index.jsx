"use client";
import Icon5 from "@/public/images/v1/icon5.png";
import Icon6 from "@/public/images/v1/icon6.png";
import Icon7 from "@/public/images/v1/icon7.png";
import featureIcon from "@/public/images/v1/icon8.png";
import { useState } from "react";
import FadeInStagger from "../../../animation/FadeInStagger";
import PricingCard from "./PricingCard";

const pricePlanData = [
	{
		id: crypto.randomUUID(),
		plan: "DIY Will",
		price: [
			{ id: 1, value: 0 },
		],
		img: Icon7,
		features: [
			"Zero Cost Will Creation",
			"Built-in Explanations",
			"Editable Anytime",
		],
		featureIcon,
		highlighted: false,
	},
	{
		id: crypto.randomUUID(),
		plan: "SmartWill Assistance",
		price: [
			{ id: 1, value: 49 },
		],
		img: Icon5,
		features: [
			"Minimal Cost Guidance",
			"Expert Assistance",
			"Editable Anytime",
		],
		featureIcon,
		highlighted: true,
	},
	{
		id: crypto.randomUUID(),
		plan: "Coming Soon",
		price: [
			{ id: 1, value: "-" },
		],
		img: Icon6,
		features: [
			"Transition Assistance",
			"Execution of Wishes",
			"Flat Fee Pricing",
		],
		featureIcon,
		highlighted: false,
	},
];

function PricePlan() {
	return (
		<section className="section sofax-section-padding bg-light" id="pricing">
			<div className="container">
				<div className="sofax-section-title center pb-50 max-width-large">
					<div className="tg-heading-subheading animation-style3">
						<h2 style={{ whiteSpace: 'nowrap' }}>
							<span style={{ display: 'block' }}>Choose the Plan That</span>
							<span style={{ display: 'block' }}>Fits Your Needs</span>
						</h2>
					</div>
				</div>

				<div className="row" id="table-price-value">
					{pricePlanData.map((pricing, index) => (
						<FadeInStagger key={pricing.id} index={index} className="col-xl-4 col-md-6">
							<PricingCard pricing={pricing} />
						</FadeInStagger>
					))}
				</div>
			</div>
		</section>
	);
}

export default PricePlan;
