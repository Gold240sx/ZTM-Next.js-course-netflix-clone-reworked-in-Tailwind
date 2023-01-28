import React from "react";
import Card from "./card";

const SectionCards = (props) => {
	const { title, videos = [], size } = props;
    
    console.log({videos});
    
	return (
		<section name="card-section" className="container relative flex flex-col px-4 mx-auto">
			<h2 className="title font-bold text-white text-[2rem] h-fit">{title}</h2>
			<div className="flex justify-start py-6 mr-3 overflow-scroll overflow-y-hidden mt-6 cardWrapper m-w-[718px]">
                {videos.map((video, index) => {
                    	<Card id={index} imgUrl={video.imgUrl} size={size} />
                })}
			</div>
		</section>
	);
};

export default SectionCards;
