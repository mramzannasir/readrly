/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

const index = () => {
	const [cartItem, setCartItem] = useState(1);
	const [del, setDel] = useState(false);
	const router = useRouter();
	return (
		<>
			{del && (
				<div className="absolute top-0 left-0 z-[100] flex h-full w-full items-center justify-center bg-[#000000] bg-opacity-60">
					<div className="h-[8rem] w-[90%] rounded-sm bg-white shadow-lg  md:w-[600px]">
						<div onClick={(()=>setDel(!del))} className="text-red cursor-pointer text-2xl font-bold">X</div>
					</div>
				</div>
			)}
			{/* Navbar */}
			<div className="wrapper  bg-purple">
				<div className="contain">
					<Navbar />
				</div>
			</div>
			{/*  */}
			<div className="wrapper n">
				<div className="contain flex  h-[60px] items-center">
					<div className="des flex">
						<div className="flex">
							<div className="des font-normal">Shopping Cart</div>
							<div className="mx-2 text-[#8e8e8e]">/</div>
							<div className="des font-normal text-[#8e8e8e]">
								Delivery details
							</div>
							<div className="mx-2 text-[#8e8e8e]">/</div>
							<div className="des font-normal text-[#8e8e8e]">Payment</div>
						</div>
					</div>
				</div>
			</div>
			<div className="wrapper">
				<div className="contain my-10 justify-between md:my-14">
					<div>
						<h1 className="subHeadings font-extrabold text-black">
							Shopping Cart
						</h1>
					</div>
					<div
						onClick={() => router.push("/customize")}
						className="flex h-[40px]  w-[14rem] cursor-pointer items-center justify-center rounded-sm border-[2px] border-[#FDA923] bg-[#FFF5E5] text-[18px] text-black shadow">
						Personalize New Book
					</div>
				</div>
			</div>
			<div className="wrapper">
				{/* left */}
				<div className="contain flex-col lg:flex-row lg:items-stretch lg:justify-between">
					<div className="b flex w-full flex-col rounded-sm pt-6  pb-2  lg:w-[50%]">
						<div className="mx-auto mb-4 sm:hidden">
							<img src="/m-book.png" alt="" />
						</div>
						<div className="flex w-full justify-between px-2 sm:px-4">
							<div className="flex gap-3">
								<div>
									<img className="hidden sm:block" src="/m-book.png" alt="" />
								</div>
								<div>
									<p className="des text-[#8e8e8e]">
										Format :{" "}
										<span className="font-medium text-black">Hard Cover</span>{" "}
									</p>
									<p className="des text-[#8e8e8e]">
										Child’s name :
										<span className="font-medium text-black">
											Gabrielle (Girl)
										</span>{" "}
									</p>
								</div>
							</div>
							<div className="flex flex-col items-end">
								<p className="des font-extrabold text-black">$ 45</p>
								<div className="flex gap-2">
									<div
										onClick={() => setCartItem(cartItem - 1)}
										className="flex h-5 w-5 cursor-pointer items-center justify-center bg-yellow  text-[20px] font-bold">
										-
									</div>
									<div className="des text-black">{cartItem}</div>
									<div
										onClick={() => setCartItem(cartItem + 1)}
										className="flex h-5 w-5 cursor-pointer items-center justify-center bg-yellow  text-[20px] font-bold">
										+
									</div>
								</div>
							</div>
						</div>
						<div className="my-4 h-[1px] w-full bg-[#8E8E8E] opacity-30">
							&nbsp;
						</div>
						<div className="flex w-full items-center justify-between px-2 sm:px-4">
							<div className="des flex items-center gap-1 text-[#8e8e8e]">
								<AiOutlineEye />
								<p>Preview</p>
							</div>
							<div className="des flex items-center gap-1 text-[#8e8e8e]">
								<FaRegEdit />
								<p>Edit info</p>
							</div>
							<div
								onClick={() => setDel(!del)}
								className="des flex cursor-pointer items-center gap-1 text-[#8e8e8e] ">
								<FiTrash2 />
								<p>Delete Now</p>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-[46%]"></div>
				</div>
			</div>
		</>
	);
};

export default index;
