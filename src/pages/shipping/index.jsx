/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineEye } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
	const [cartItem, setCartItem] = useState(1);
	const [del, setDel] = useState(false);
	const router = useRouter();

	const delProduct = () => {
		toast.success("Order Deleted", {
			position: toast.POSITION.TOP_CENTER,
		});
		setDel(!del);
	};
	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={500}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				theme="light"
			/>
			{del && (
				<div className="absolute top-0 left-0 z-[100] flex h-full w-full items-center justify-center bg-[#000000] bg-opacity-60">
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.4, opacity: 0 }}
						transition={{ type: "spring", duration: 1 }}
						className="w-[90%] rounded-sm bg-white py-5 px-2 shadow-lg  md:w-[450px]">
						<div>
							<h1 className="title font-bold  text-black">Hi There,</h1>
							<p className="des mb-5 font-semibold text-black">
								Are you sure you want to cancel this order ?
							</p>
						</div>
						<div className="flex w-full items-center justify-between">
							<button
								onClick={() => setDel(!del)}
								className="des flex h-[40px] w-[90%] items-center justify-center rounded-sm bg-[#F2F2F2] font-semibold text-black sm:w-[8rem]">
								No
							</button>
							<button
								onClick={delProduct}
								className="des flex h-[40px] w-[90%] items-center justify-center rounded-sm bg-[#DD1C1A] font-semibold text-white sm:w-[8rem]">
								Yes
							</button>
						</div>
					</motion.div>
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
					<div className="hidden sm:block">
						<div
							onClick={() => router.push("/customize")}
							className="flex h-[40px]  w-[14rem] cursor-pointer items-center justify-center rounded-sm border-[2px] border-[#FDA923] bg-[#FFF5E5] text-[18px] text-black shadow">
							Personalize New Book
						</div>
					</div>
				</div>
			</div>
			<div className="wrapper">
				{/* left */}
				<div className="contain flex-col gap-4 lg:flex-row lg:items-stretch lg:justify-between lg:gap-0">
					<div className="b flex sm:h-[9rem] h-[13rem]  w-full flex-col rounded-sm pt-3 lg:w-[50%]">
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
					<div className="w-full lg:w-[46%]">
						<div className="b flex w-full items-center gap-3 py-5 px-2  sm:py-3 sm:pl-5">
							<div>
								<img
									src="/shipping-sum.png"
									className="hidden sm:block"
									alt=""
								/>
							</div>
							<div>
								<h1 className="title font-medium text-black">
									Kindly Confirm Information !
								</h1>
								<p className="des mt-1 font-medium text-[#8e8e8e]">
									Ensure your information are correct before placing order
								</p>
							</div>
						</div>
						<div className="b mt-4 flex w-full flex-col py-5 px-2 sm:p-6 ">
							<h1 className="title font-bold text-black">Order Summary</h1>
							<div className="mt-6 flex items-center justify-between">
								<p className="des text-[#8e8e8e]">Hard cover </p>
								<p className="des font-medium text-black">$ 40</p>
							</div>
							<div className=" my-6 h-[1px] w-full bg-[#8e8e8e] opacity-30"></div>
							<div className="flex items-center justify-between">
								<h1 className="title font-bold text-black">Sub Total</h1>
								<p className="des font-bold text-black">$ 40</p>
							</div>
							<div className="my-6 w-full">
								<div className="flex h-[40px] w-full items-center rounded-sm border-[1px] border-[#8e8e8e] px-2 sm:px-3">
									<input
										type="text"
										className="des h-full w-[80%] border-none bg-transparent font-medium outline-none placeholder:text-[#8e8e8e]"
										placeholder="Coupon Code  "
									/>
									<button className="des flex w-[20%] justify-end border-none font-bold text-black outline-none">
										Apply
									</button>
								</div>
							</div>
							<div className="flex w-full  gap-2">
								<div>
									<input
										type="checkbox"
										unChecked
										className="h-6 w-6 bg-black"
									/>
								</div>
								<div>
									<p className="des font-bold text-black">
										I agree to the terms and condition
									</p>
								</div>
							</div>
							<div className="mt-6 w-full">
								<button
									onClick={() => router.push("/shipping/Page_01")}
									className="des flex h-[40px]  w-full items-center justify-center rounded-sm  bg-purpleLight font-medium text-white">
									Proceed to checkout
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default index;
