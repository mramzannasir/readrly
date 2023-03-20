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

const Page_01 = () => {
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
						<h1 className="subHeadings font-extrabold text-black">
							Delivery Details
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
			{/* _______________________Header_Done_Here______________________ */}
			<div className="wrapper">
				{/* left */}
				<div className="contain flex-col gap-4 lg:flex-row lg:items-stretch lg:justify-between lg:gap-0">
					<div className="b flex w-full flex-col gap-6 rounded-sm py-5 px-2 pt-3 sm:p-6 lg:w-[50%]">
						<div>
							<h1 className="des font-extrabold text-black">
								Contact Information
							</h1>
						</div>
						<div>
							<label htmlFor="" className="des text-bold font-semibold">
								Email{" "}
								<sub className="text-xl font-semibold text-rose-600">*</sub>{" "}
							</label>
							<input
								type="email"
								placeholder="example@email.com"
								className="mt-2 h-[40px] w-full rounded-sm border-[1px] border-[#8e8e8e] pl-2 font-medium outline-none placeholder:text-[#8e8e8e]"
							/>
						</div>
						<div>
							<label htmlFor="" className="des text-bold font-semibold">
								Phone number{" "}
								<sub className="text-xl font-semibold text-rose-600">*</sub>{" "}
							</label>
							<input
								type="text"
								placeholder="Enter phone number"
								className="mt-2 h-[40px] w-full rounded-sm border-[1px] border-[#8e8e8e] pl-2 font-medium outline-none placeholder:text-[#8e8e8e]"
							/>
						</div>
						<div className="flex w-full  gap-2">
							<div>
								<input type="checkbox" unChecked className="h-6 w-6 bg-black" />
							</div>
							<div>
								<p className="des font-light text-black">
									Signup for exclusive offers and news via text messages or
									email
								</p>
							</div>
						</div>
						<div className="h-[1px] w-full bg-[#8e8e8e] bg-opacity-50"></div>
						<div>
							<h1 className="des font-extrabold text-black">
								Shipping Address
							</h1>
						</div>
						<div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-0">
							<div className="h-[40px] w-full md:w-[48%]">
								<div>
									<label htmlFor="" className="des text-bold font-semibold">
										First Name{" "}
									</label>
									<input
										type="text"
										placeholder="Enter First Name"
										className="mt-2 h-[40px] w-full rounded-sm border-[1px] border-[#8e8e8e] pl-2 font-medium outline-none placeholder:text-[#8e8e8e]"
									/>
								</div>
							</div>
							<div className="mt-6 h-[40px] w-full md:mt-0 md:w-[48%]">
								<div className="w-full">
									<label htmlFor="" className="des  text-bold font-semibold">
										Last Name
									</label>
									<input
										type="text"
										placeholder="Enter Last Name"
										className="mt-2 h-[40px] w-full rounded-sm border-[1px] border-[#8e8e8e] pl-2 font-medium outline-none placeholder:text-[#8e8e8e]"
									/>
								</div>
							</div>
						</div>
						<div className="mt-8 w-full">
							<button
								onClick={() => router.push("/shipping/Page_02")}
								className="des flex h-[40px]  w-full items-center justify-center rounded-sm  bg-purpleLight font-medium text-white">
								Proceed to payment
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
							<p className="des font-normal text-black">$ 40</p>
						</div>
						<div className="flex w-full items-center justify-between">
							<p className="des font-normal text-[#8e8e8e]">Shipping Fee</p>
							<p className="des font-normal text-black">$ 10</p>
						</div>
						<div className="h-[1px] w-full bg-[#8e8e8e] bg-opacity-50"></div>
						<div className="flex w-full items-center justify-between">
							<p className="des font-extrabold text-black">Total</p>
							<p className="des font-extrabold text-black">$ 10</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Page_01;
