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

const Page_02 = () => {
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
						<h1 className="subHeadings font-extrabold text-black">Payment</h1>
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
			{/* _______________________Header_Done_Here______________________ */}
			<div className="wrapper">
				{/* left */}
				<div className="contain flex-col gap-4 lg:flex-row lg:items-stretch lg:justify-between lg:gap-0">
					<div className="b flex w-full flex-col gap-6 rounded-sm py-5 px-2 pt-3 sm:p-6 lg:w-[50%]">
						<div>
							<h1 className="des font-extrabold text-black">Payment Details</h1>
							<p className="des mt-1 font-normal text-[#8e8e8e]">
								All transactions are secure and encrypted.
							</p>
						</div>
						<div className="flex h-[45px] w-full items-center justify-between rounded-sm border-[1px] border-[#8e8e8e] px-2 font-medium">
							<div className="flex items-center gap-1">
								<div>
									<input type="radio" unChecked className="mt-2 h-5 w-5" />
								</div>
								<div className="des text-[#8e8e8e]">Pay with PayPal</div>
							</div>
							<div>
								<img src="/paypal.png" alt="" />
							</div>
						</div>
						<div className="flex w-full flex-col gap-4 rounded-sm bg-[#F6F2FF] px-2 pb-16 pt-8 md:px-4">
							<div className="flex w-full items-center justify-between">
								<div>
									<div className="flex items-center gap-1">
										<div>
											<input type="radio" unChecked className="mt-1 h-5 w-5" />
										</div>
										<div className="des font-medium text-black">
											Pay with Card
										</div>
									</div>
								</div>
								<div className="flex items-center gap-1">
									<img
										src="/visa-logo.png"
										className="w-[1.4rem] md:w-auto "
										alt=""
									/>
									<img
										src="/master-card.png"
										className="w-[1.4rem] md:w-auto "
										alt=""
									/>
									<img
										src="/amex.png"
										className="w-[1.4rem] md:w-auto "
										alt=""
									/>
								</div>
							</div>
							<div>
								<label htmlFor="" className="des text-bold font-semibold">
									Name On Card{" "}
								</label>
								<input
									type="text"
									className="mt-2 h-[40px] w-full rounded-sm border-[1px] border-[#8e8e8e] bg-[#F6F2FF] pl-2 font-medium outline-none placeholder:text-[#8e8e8e]"
								/>
							</div>
							<div>
								<label htmlFor="" className="des text-bold font-semibold">
									Card Number{" "}
								</label>
								<input
									type="text"
									className="mt-2 h-[40px] w-full rounded-sm border-[1px] border-[#8e8e8e] bg-[#F6F2FF] pl-2 font-medium outline-none placeholder:text-[#8e8e8e]"
								/>
							</div>
							<div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
								<div className="h-[40px] w-full md:w-[48%]">
									<div>
										<label htmlFor="" className="des text-bold font-semibold">
											Expiration Date{" "}
										</label>
										<input
											type="text"
											placeholder="MM/YY"
											className="mt-2 h-[40px] w-full rounded-sm border-[1px] border-[#8e8e8e] bg-[#F6F2FF] pl-2 font-medium outline-none placeholder:text-[#8e8e8e]"
										/>
									</div>
								</div>
								<div className="mt-6 h-[40px] w-full md:mt-0 md:w-[48%]">
									<div>
										<label htmlFor="" className="des text-bold font-semibold">
											Security Code{" "}
										</label>
										<input
											type="text"
											placeholder="3 digit code"
											className="mt-2 h-[40px] w-full rounded-sm border-[1px] border-[#8e8e8e] bg-[#F6F2FF] pl-2 font-medium outline-none placeholder:text-[#8e8e8e]"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className=" w-full">
							<button
								onClick={() => router.push("/shipping/Ordered")}
								className="des flex h-[40px]  w-full items-center justify-center rounded-sm  bg-purpleLight font-medium text-white">
								Place Order
							</button>
						</div>
					</div>
					<div className="b flex h-[208px] w-full flex-col gap-4 rounded-sm p-2 sm:p-6 lg:w-[46%]">
						<div>
							<h1 className="des font-extrabold text-black">Order Summary</h1>
						</div>
						<div className="flex w-full items-center justify-between">
							<p className="des font-normal text-[#8e8e8e]">
								Hard cover storybook
							</p>
							<p className="des font-medium text-black">$ 40</p>
						</div>
						<div className="flex w-full items-center justify-between">
							<p className="des font-normal text-[#8e8e8e]">Shipping Fee</p>
							<p className="des font-medium text-black">$ 20</p>
						</div>
						<div className="h-[1px] w-full bg-[#8e8e8e] bg-opacity-50"></div>
						<div className="flex w-full items-center justify-between">
							<p className="des font-extrabold text-black">Total</p>
							<p className="des font-extrabold text-black">$ 60</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page_02;
