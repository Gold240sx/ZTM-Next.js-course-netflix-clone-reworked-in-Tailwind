import Image from "next/image";
import cliffordPic from "../../public/static/images/clifford.webp";
import "./banner.module.css";
import playIcon from "../../public/static/icons/playArrow.svg";

const Banner = (props) => {
	const { title, subtitle, imgUrl } = props;
	const handleOnPlay = () => {};

	return (
		<div name="container" className="w-full  relative max-h-[80vh] aspect-[4/2.5] overflow-hidden">
			<Image
				name="bannerImg"
				src={cliffordPic}
				alt="Banner Image"
				className="absolute z-0 w-full h-auto bg-center bg-cover bannerImg"
			/>
			<div name="leftWrapper" className="z-10 w-full h-full ">
				<div name="left" className="absolute flex flex-col justify-start h-auto px-16 mt-24">
					<div name="nSeriesWrapper" className="flex flex-row justify-start w-full">
						<p name="firstLetter" className="text-5xl text-red-600 scale-x-75 text-bold">
							N
						</p>
						<p name="series" className="leading-[3rem] text-center text-gray-500 align-middle">
							Series
						</p>
					</div>
					<h3 name="title" className="text-5xl font-bold text-white text-stroke-black text-stroke-2 roboSlab ">
						{title}
					</h3>
					<h3 name="subtitle" className="text-xl font-semibold text-slate-100 text-stroke-black text-stroke ">
						{subtitle}
					</h3>
					<div
						name="playBtnWrapper"
						className="flex flex-row my-4 text-center bg-white rounded-md cursor-pointer py-none w-fit justify-items-center px-7 h-fit hover:bg-slate-200 hover:text-slate-700 text-semibold">
						<Image name="playIcon" src={playIcon} alt="Play Icon" className="w-8 h-fit" />
						<button
							name="btnWithIcon"
							onClick={() => handleOnPlay()}
							className="
                                font-semibold 
                                bg-none 
                                bg-transparent
                                normal-case
                                text-black
                                text-sm
                                border-none
                                outline-none
                                text-[rgb(31, 41, 55)]
                                h-fit
                                self-center
                            ">
							Play
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
