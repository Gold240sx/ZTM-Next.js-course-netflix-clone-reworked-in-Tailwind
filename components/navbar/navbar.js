import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import netflixLogo from "../../public/static/images/netflix.svg";

const Navbar = (props) => {
	const { username } = props;
	const router = useRouter();
	const [showDropdown, setShowDropdown] = useState();

	const handleOnClickHome = (e) => {
		e.preventDefault();
		router.push("/");
	};
	const handleOnClickWatchlist = (e) => {
		e.preventDefault();
		router.push("/watchlist");
	};
	const handleOnClickCategories = (e) => {
		e.preventDefault();
		router.push("/categories");
	};

	const handleDropdown = (e) => {
		e.preventDefault();
		setShowDropdown(!showDropdown);
	};

	return (
		<div
			id="navbar-container"
			name="navbar-container"
			className="fixed top-0 z-20 w-full text-white bg-gradient-to-b from-black to-transparent">
			<div name="wrapper" className="flex w-full p-5 px-4">
				<a name="logo-link" href="./" className="flex text-base font-medium align-center">
					<div name="logo-wrapper" className="flex px-1 mr-6 text-red-600">
						<Image src={netflixLogo} alt="netflix logo" />
					</div>
				</a>
				<ul name="nav-items" className="flex flex-row w-1/2 ml-6 text-sm list-none">
					<li name="nav-item" onClick={handleOnClickHome} className="mr-3 text-base cursor-pointer text-semibold">
						Home
					</li>
					<li name="nav-item" onClick={handleOnClickWatchlist} className="mr-3 text-base cursor-pointer text-semibold">
						Watchlist
					</li>
					<li name="nav-item" onClick={handleOnClickCategories} className="mr-3 text-base cursor-pointer text-semibold">
						Categories
					</li>
				</ul>
				<nav name="nav-container" className="flex items-start ml-auto w-fit">
					<div>
						<button name="username-button" className="flex overflow-hidden text-white align-center">
							<p name="username" className="" onClick={handleDropdown}>
								{username}
							</p>
							<Image src={"/static/icons/expandMore.svg"} width={20} height={20} alt="expand dropdown" />
						</button>
						{showDropdown && (
							<div
								name="nav-dropdown"
								className="p-2 ml-auto text-white border border-blue-900 rounded cursor-pointer bg-black/50">
								<Link href="/login">Sign Out</Link>
								<div name="line-wrapper" className=""></div>
							</div>
						)}
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
