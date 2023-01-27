import React from "react";
import Card from "./card";

const SectionCards = (props) => {
	const { title } = props;

	return (
		<section name="card-section" className="container relative flex flex-col px-4 mx-auto bg-black/50">
			<h2 className="title font-bold text-white text-[2rem] h-fit">{title}</h2>
			<div className="flex justify-start py-6 mr-3 overflow-scroll overflow-y-hidden mt-6 cardWrapper m-w-[718px]">
				<Card id={0} imgUrl="/static/images/clifford.webp" size="large" />
				<Card imgUrl="/static/images/clifford.webp" size="large" />
				<Card imgUrl="/static/images/clifford.webp" size="large" />
				<Card imgUrl="/static/images/clifford.webp" size="large" />
				<Card imgUrl="/static/images/clifford.webp" size="large" />
				<Card imgUrl="/static/images/clifford.webp" size="large" />
				<Card imgUrl="/static/images/clifford.webp" size="large" />
				<Card imgUrl="/static/images/clifford.webp" size="large" />
				<Card imgUrl="/static/images/clifford.webp" size="large" />
				<Card imgUrl="/static/images/clifford.webp" size="large" />
				<Card imgUrl="/static/images/clifford.webp" size="large" />
				<Card imgUrl="/static/images/clifford.webp" size="large" />
				<Card imgUrl="/static/images/clifford.webp" size="large" />
				<Card imgUrl="/static/images/clifford.webp" size="large" />
				<Card imgUrl="/static/images/clifford.webp" size="large" />
				{/* <Card imgUrl="/static/images/clifford.webp" size="medium" />
				<Card imgUrl="/static/images/clifford.webp" size="small" /> */}
				{/* <Card imgUrl="/static/images/clifford.webp" size="" /> */}
			</div>
		</section>
	);
};

export default SectionCards;
