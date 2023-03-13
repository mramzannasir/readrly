/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [show, setShow] = useState(false);
	const onclick = () => {
		setOpen(!open);
	};
	const router = useRouter();
	return (
		<>
			<div className="s flex h-[4rem] w-[100%] items-center justify-center">
				{open ? (
					<div className="absolute top-0 left-0 h-full w-full bg-[#00000067] lg:hidden"></div>
				) : (
					""
				)}
				<nav className="flex w-[100%]  items-center justify-between">
					<div className="logo">
						<Link href={"/"}>
							<img
								className="h-[41px] lg:mb-2 lg:h-[45px] lg:w-auto"
								src="/logo.png"
							/>
						</Link>
					</div>

					{/* Close btn */}
					<div
						onClick={onclick}
						className="absolute right-4 top-6 z-[99] cursor-pointer text-2xl transition-all duration-500 lg:hidden">
						{open ? (
							<div className="sm:hidden">
								{" "}
								<IoMdClose color="#ffffff" />
							</div>
						) : (
							<FiMenu size={27} color="white" />
						)}
					</div>
					{/* Navbar */}
					<div
						className={`absolute top-0 z-[100] flex h-screen w-full  flex-col items-center  justify-center bg-black pt-8 text-[14px] font-normal leading-[180%] lg:static lg:h-auto lg:flex-row lg:items-center lg:pt-0 ${
							open ? "left-0" : "left-[-1080px]"
						}  ease left-0 z-[99] h-full w-full gap-8 font-normal transition-all duration-[800ms] sm:w-[60%] lg:w-auto  lg:gap-6 lg:bg-inherit xl:gap-8`}>
						<div
							onClick={onclick}
							className="absolute right-1 top-5 z-[99] cursor-pointer text-2xl transition-all duration-500 lg:hidden">
							{open ? <IoMdClose color="#ffffff" /> : ""}
						</div>
						<Link
							className={
								router.pathname == "/customize"
									? "w-[90%] rounded-r-xl  px-4 py-2 text-xl font-semibold text-white lg:w-auto lg:bg-inherit lg:text-base lg:font-medium"
									: "pl-2 text-xl font-semibold text-white lg:pl-0 lg:text-base lg:font-medium "
							}
							href={"/customize"}>
							Customize
						</Link>{" "}
						<Link
							className={
								router.pathname == "/contact"
									? "w-[90%] rounded-r-xl  px-4 py-2 text-xl font-semibold text-white lg:w-auto lg:bg-inherit lg:text-base lg:font-medium"
									: "pl-2 text-xl font-semibold text-white lg:pl-0 lg:text-base lg:font-medium"
							}
							href={"/contact"}>
							Contact Us
						</Link>
						<Link
							className={
								router.pathname == "/faq"
									? "w-[90%] rounded-r-xl  px-4 py-2 text-xl font-semibold text-white lg:w-auto lg:bg-inherit lg:text-base lg:font-medium"
									: "pl-2 text-xl font-semibold text-white lg:pl-0 lg:text-base lg:font-medium"
							}
							href={"/faq"}>
							FAQ
						</Link>{" "}
						<Link
							className={
								router.pathname == "/about"
									? "w-[90%] rounded-r-xl  px-4 py-2 text-xl font-semibold text-white lg:w-auto lg:bg-inherit lg:text-base lg:font-medium"
									: "pl-2 text-xl font-semibold text-white lg:pl-0 lg:text-base lg:font-medium"
							}
							href={"/about"}>
							About us
						</Link>{" "}
						<div className="hidden lg:block">
							<button className="mr-10 flex h-7 w-[5rem] items-center justify-center gap-1 rounded-sm bg-white text-black lg:mr-0 lg:ml-4">
								<div>
									<BsCart3 size={20} />
								</div>
								<div className="text-sm font-bold">Cart</div>
							</button>
						</div>
					</div>
					{/* Cart */}
					<div className="lg:hidden ">
						<button className="mr-10 mt-[9px] flex h-7 w-[5rem] items-center justify-center gap-1 rounded-sm bg-white text-black lg:mr-0 lg:ml-4">
							<div>
								<BsCart3 size={20} />
							</div>
							<div className="text-sm font-bold">Cart</div>
						</button>
					</div>
				</nav>
			</div>
		</>
	);
};
export default Navbar;
