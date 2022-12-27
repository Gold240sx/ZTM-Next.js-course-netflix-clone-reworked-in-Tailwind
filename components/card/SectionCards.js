import React from "react";
import Card from "./card";

const SectionCards = (props) => {
	const { title } = props;

	return (
		<section name="card-section" className="relative">
			<h2 className="text-white">{title}</h2>
			<div className="flex flex-row">
				<Card imgUrl="/static/images/clifford.webp" size="large" />
				<Card imgUrl="/static/images/clifford.webp" size="medium" />
				<Card imgUrl="/static/images/clifford.webp" size="small" />
				{/* <Card imgUrl="/static/images/clifford.webp" size="" /> */}
			</div>
		</section>
	);
};

export default SectionCards;
