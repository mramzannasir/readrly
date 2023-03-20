/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import { useRouter } from "next/router";

const Page_01 = () => {
	const router = useRouter();
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
												Who is the gift giver?
											</p>
										</div>
										<div className="flex h-[2rem] w-[6.5rem] items-center justify-center rounded-sm bg-yellow font-semibold text-black">
											Step 2 of 3
										</div>
									</div>
									<div className="my-8 h-[1px] w-full bg-[#F2F2F2] "></div>
									<div>
										<div className="mt-8 flex w-full flex-col gap-6 text-black">
											<div>
												<label htmlFor="" className="des font-extrabold">
													Relationship to child
												</label>
												<input
													type="text"
													className="mt-2 flex h-[2.5rem] w-full items-center rounded-sm  border border-[#8e8e8e] pl-2 outline-none placeholder:text-[#8e8e8e]"
													placeholder="E.g Mother"
												/>
											</div>
											<div>
												<label htmlFor="" className="des  font-extrabold">
													What is the Occasion (Optional)
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
													Special Note to child
												</label>
												<textarea
													rows={7}
													className="mt-2 flex  w-full items-center rounded-sm  border border-[#8e8e8e] p-2 outline-none placeholder:text-[#8e8e8e]"
													placeholder="E.g With love from,"
												/>
											</div>
										</div>
										<div className="mt-5 flex w-full flex-col gap-3 md:flex-row md:justify-between md:gap-0">
											<button
												onClick={() => router.push("/product")}
												className=" h-[40px] w-full rounded-sm border-none bg-[#F2F2F2] text-purple  outline-none md:w-[48%]">
												Previous
											</button>
											<button
												onClick={() => router.push("/product/Page_02")}
												className=" h-[40px] w-full rounded-sm border-none bg-purpleLight text-white outline-none md:w-[48%]">
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

export default Page_01;
