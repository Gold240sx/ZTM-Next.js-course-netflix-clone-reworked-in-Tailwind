import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Card = (props) => {
	const { imgUrl, size, id } = props;
	var [imgSrc, setImgSrc] = useState(imgUrl);

	const classMap = (size) => {
		switch (size) {
			case "large":
				return { width: 218, height: 434, minwidth: 218, minheight: 434, maxwidth: 218, layoutFill: null };
			case "medium":
				return { width: 158, height: 280, minwidth: 158, minheight: 280, layoutFill: null };
			case "small":
				return { width: 300, height: 170, minwidth: 300, minheight: 170, layoutFill: null };
			default:
				return { layoutFill: "fill" };
		}
		return { width, height, minwidth, minheight, layoutFill };
	};

    //scale Y only the first element, otherwise scale X and Y
    const scale = id === 0 ? {scaleY: 1.1} : { scale: 1.1}
	return (
		<div name="card-container" className="mr-1 rounded-md cursor-pointer text-white-500 z-60 h-60">
			<motion.div
				name="imgMotionWrapper"
				whileHover={scale}
				className="inline-block bg-cover rounded-md shadow-md hover:-z-50 m-w-[218px] h-full"
				style={`
                    width: ${classMap(size).width}; 
                    height: ${classMap(size).height}; 
                    min-width: ${classMap(size).minwidth}; 
                    min-height: ${classMap(size).minheight} ;
                `}>
				<Image
					name="card-image"
					src={imgSrc}
					alt="image"
					className="top-0 bottom-0 left-0 right-0 block object-center h-full rounded-md min-w-[160px]"
					width={classMap(size).width}
					height={classMap(size).height}
					fill={classMap(size).layoutFill}
					positon={`relative`}
					onError={(e) => {
						setImgSrc("/static/images/movieDefault.jpg");
						e.target.classList.add("opacity-50");
						e.target.textContent = "Image not found";
					}}
					style={` border: green 20px solid`}
				/>
			</motion.div>
		</div>
	);
};

export default Card;
