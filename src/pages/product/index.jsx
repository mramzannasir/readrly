/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { useRouter } from "next/router";

const index = () => {
	const router = useRouter();
	const [gender, setGender] = useState("male");
	const boy = () => {
		setGender("male");
	};
	const girl = () => {
		setGender("female");
	};
	return (
		<>
			<div className="wrapper  bg-purple">
				<div className="contain">
					<Navbar />
				</div>
			</div>
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 1 }}
				className="wrapper ">
				<div className="wrapper n">
					<div className="contain flex  h-[60px] items-center">
						<div className="des flex">
							<div className="flex">
								<Link href={`/`} className="des font-normal">
									Home
								</Link>
								<div className="mx-2">/</div>
								<div className="des font-normal text-[#8e8e8e]">
									Personalize Books
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="wrapper">
					<div className="flex h-[800px] w-full items-center lg:h-[700px] lg:justify-between 2xl:h-[850px] 4xl:h-auto">
						<div className="flex h-full w-full lg:justify-between ">
							<div className="hidden h-full w-full lg:block lg:w-[39%] ">
								<img src="/side-book.png" className="h-full w-full" alt="" />
							</div>
							<div className="flex w-full  justify-center lg:w-[59%]">
								<div className="w-[95%] sm:w-[80%]">
									<h1 className="subHeadings mt-8 text-center font-extrabold text-purpleLight">
										Personalize your child’s book
									</h1>
									<p className="des text-center text-[#8e8e8e]">
										Complete the following steps to personalize your book
									</p>
									<div className="mt-4 flex w-full items-center justify-between">
										<div>
											<p className="des font-bold text-black">
												Personal Information
											</p>
										</div>
										<div className="flex h-[2rem] w-[6.5rem] items-center justify-center rounded-sm bg-yellow font-semibold text-black">
											Step 1 of 3
										</div>
									</div>
									<div className="my-8 h-[1px] w-full bg-[#F2F2F2] "></div>
									<div>
										<h1 className="des font-semibold text-black">
											Select Gender
										</h1>
										<div className="flex w-full items-center justify-start gap-4">
											<div
												onClick={boy}
												className={`flex h-[80px] w-[80px] cursor-pointer items-center justify-center  rounded-full transition-all duration-300  ${
													gender === "male" ? "bg-purpleLight" : "bg-[#8e8e8e]"
												} `}>
												<img src="/avater-1.png" alt="" />
											</div>
											<div
												onClick={girl}
												className={`flex h-[80px] w-[80px] cursor-pointer items-center   justify-center rounded-full transition-all duration-300  ${
													gender === "female"
														? "bg-purpleLight"
														: "bg-[#8e8e8e]"
												} `}>
												<img src="/avater-2.png" className="" alt="" />
											</div>
										</div>

										<div className="mt-8 flex w-full flex-col gap-6 text-black">
											<div>
												<label htmlFor="" className="des font-extrabold">
													Child Name
												</label>
												<input
													type="text"
													className="mt-2 flex h-[2.5rem] w-full items-center rounded-sm  border border-[#8e8e8e] pl-2 outline-none placeholder:text-[#8e8e8e]"
													placeholder="Enter Name"
												/>
											</div>
											<div>
												<label htmlFor="" className="des  font-extrabold">
													Select Skin Color
												</label>
												<div>
													<div className="mt-2 flex h-[2.5rem] w-full cursor-pointer items-center justify-between rounded-sm  border border-[#8e8e8e] px-2 text-[#8e8e8e] outline-none">
														<p>Select---</p>
														<div>
															<BsChevronRight size={20} color="#8e8e8e" />
														</div>
													</div>
												</div>
											</div>
											<div>
												<label htmlFor="" className="des font-extrabold">
													Child’s Favorite Color ?
												</label>
												<input
													type="text"
													className="mt-2 flex h-[2.5rem] w-full items-center rounded-sm  border border-[#8e8e8e] pl-2 outline-none placeholder:text-[#8e8e8e]"
													placeholder="Color Name"
												/>
											</div>
										</div>
										<div>
											<button
												onClick={() => router.push("product/Page_01")}
												className="mt-4 h-[40px] w-full rounded-sm border-none bg-purpleLight text-white outline-none">
												Next Step
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default index;
