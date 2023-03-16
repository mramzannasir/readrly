/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Book from "./Books";
import Customize from "./Customize";
import Order from "./Order";
import Privacy from "./Privacy";
import Shipping from "./Shipping";

const index = () => {
	const [navigate, setNavigate] = useState(1);
	return (
		<>
			<div className="wrapper bg-purple">
				<div className="contain">
					<Navbar />
				</div>
			</div>
			<div className="wrapper">
				<img src="fa.png" className="w-full xl:h-[450px]" alt="" />
			</div>
			<div className="wrapper my-[40px] lg:my-[55px]">
				<div className="contain">
					<h1 className="text-[25px] font-bold leading-[1.5rem] text-black md:text-[30px] md:leading-[2.3rem] lg:text-[35px] lg:leading-[2.9rem] xl:leading-[3rem]">
						What can we help you with ?
					</h1>
				</div>
				<div className="contain mt-6 flex-wrap items-center gap-3 sm:justify-start">
					<div
						onClick={() => setNavigate(1)}
						className={`flex ${
							navigate === 1
								? "border-purpleLight bg-purpleLight text-white"
								: ""
						} h-[2.5rem] cursor-pointer items-center justify-center rounded-md border-[1px] border-[#8E8E8E] px-3 text-[#8e8e8e] transition-all duration-500`}>
						About Readrly Books
					</div>
					<div
						onClick={() => setNavigate(2)}
						className={`flex ${
							navigate === 2
								? "border-purpleLight bg-purpleLight text-white"
								: ""
						} h-[2.5rem] cursor-pointer items-center justify-center rounded-md border-[1px] border-[#8E8E8E] px-3 text-[#8e8e8e] transition-all duration-500`}>
						Customization
					</div>
					<div
						onClick={() => setNavigate(3)}
						className={`flex ${
							navigate === 3
								? "border-purpleLight bg-purpleLight text-white"
								: ""
						} h-[2.5rem] cursor-pointer items-center justify-center rounded-md border-[1px] border-[#8E8E8E] px-3 text-[#8e8e8e] transition-all duration-500`}>
						Placing an Order
					</div>
					<div
						onClick={() => setNavigate(4)}
						className={`flex ${
							navigate === 4
								? "border-purpleLight bg-purpleLight text-white"
								: ""
						} h-[2.5rem] cursor-pointer items-center justify-center rounded-md border-[1px] border-[#8E8E8E] px-3 text-[#8e8e8e] transition-all duration-500`}>
						Shipping
					</div>
					<div
						onClick={() => setNavigate(5)}
						className={`flex ${
							navigate === 5
								? "border-purpleLight bg-purpleLight text-white"
								: ""
						} h-[2.5rem] cursor-pointer items-center justify-center rounded-md border-[1px] border-[#8E8E8E] px-3 text-[#8e8e8e] transition-all duration-500`}>
						Data & Privacy
					</div>
				</div>
				<div className="contain  mt-8">
					{navigate === 1 && <Book />}
					{navigate === 2 && <Customize />}
					{navigate === 3 && <Order />}
					{navigate === 4 && <Shipping />}
					{navigate === 5 && <Privacy />}
				</div>
			</div>
			<div className="wrapper">
				<Footer />
			</div>
		</>
	);
};
export default index;
