import Head from "next/head";
import Image from "next/image";
import { Card, Banner, Navbar } from "../components";
import SectionCards from "../components/card/sectionCards";

export default function Home() {
	return (
		<div className="box-border h-screen p-0 m-0 overflow-x-hidden text-white bg-black font-roboSlab scrollbar-hide">
			<Head>
				<title>Netflix Clone</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.png" />
			</Head>

			<Navbar username="michael@directmailcompany.com" />
			<Banner title="Clifford the big red dog" subtitle="a very cute dog" imgUrl="../public/static/images/clifford.jpg" />
			<SectionCards title="Disney" />
			<section name="card-section" className="relative "></section>
		</div>
	);
}
