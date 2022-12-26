import "./navbar.module.css";

const Navbar = (props) => {
	const { username } = props;

	return (
		<div id="navbar-container" name="navbar-container" className="fixed top-0 z-20 w-full text-white bg-hero-pattern">
			<div name="wrapper" className="flex w-full p-5 px-4">
				<a name="logo-link" href="./" className="flex text-base font-medium align-center">
					<div name="logo-wrapper" className="flex w-32 px-1 text-red-600">
						Netflix
					</div>
				</a>
				<ul name="nav-items" className="flex flex-row w-1/2 ml-6 text-sm list-none">
					<li name="nav-item" className="mr-3 text-base cursor-pointer text-semibold">
						Home
					</li>
					<li name="nav-item" className="mr-3 text-base cursor-pointer text-semibold">
						Watchlist
					</li>
					<li name="nav-item" className="mr-3 text-base cursor-pointer text-semibold">
						Categories
					</li>
				</ul>
				<nav name="nav-container" className="flex items-start ml-auto w-fit">
					<div>
						<button name="username-button" className="flex overflow-hidden text-white align-center">
							<p name="username" className="">
								{username}
							</p>
							{/* Expand More Icon */}
						</button>
						<div
							name="nav-dropdown"
							className="absolute p-2 ml-auto text-white border border-blue-900 rounded cursor-pointer bg-black/50">
							<a>Sign Out</a>
							<div name="line-wrapper" className=""></div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
