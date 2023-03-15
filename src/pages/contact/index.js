/* eslint-disable react-hooks/rules-of-hooks */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import { BsCardImage } from "react-icons/bs";

const index = () => {
	const router = useRouter();
	const [show, setShow] = useState(false);
	const hanldeOnChnage = () => {
		setShow(true);
	};
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	// const onSubmit = (values) => router.push("/nextreg");
	const onSubmit = (values) => router.push("/");
	return (
		<>
			<div className="wrapper w-full bg-purple">
				<div className="contain">
					<Navbar />
				</div>
			</div>
			<div className="wrapper my-[40px] md:my-[67px]">
				<div className="wrapper">
					<div className="subHeadings font-extrabold text-black">
						Contact Us
					</div>
					<div className=" w-[95%] sm:w-[55%]">
						<p className="des my-5 text-center sm:text-left">
							We are happy to assist with any questions that come up during your
							ordering process or with any other help you may need. Kindly fill
							the form below to reach out to us or send us a mail directly to{" "}
							<span className="des inline-block cursor-pointer text-center text-purpleLight">
								info@readrly.io
							</span>
						</p>
					</div>
				</div>

				<div className="wrapper">
					<div className="f flex w-[95%] flex-col items-center  justify-center pb-6 sm:w-[55%]">
						<div className="title my-6 text-center font-bold text-black">
							Send us a mail
						</div>
						<form
							action=""
							onSubmit={handleSubmit(onSubmit)}
							className="flex w-[98%]  flex-col gap-4 sm:w-[90%]">
							<div>
								<label
									className="text-sm font-semibold text-black lg:text-base"
									htmlFor="">
									Full Name <sub className="text-xl ml-1 text-red-600">*</sub>{" "}
								</label>
								<div className="mt-1 h-[40px]  rounded-sm border-[1px] border-[#8E8E8E]">
									<input
										{...register("firstName", {
											required: true,
											maxLength: 25,
											pattern: /^[A-Za-z ]+$/i,
										})}
										type="text"
										id=""
										className="h-full w-full border-none bg-transparent pl-3  outline-none placeholder:font-normal placeholder:text-[#8E8E8E] target:bg-transparent checked:bg-transparent focus:bg-transparent"
										placeholder="Your first and last name"
									/>
								</div>
								{errors?.firstName?.type === "required" && (
									<h6 className="pl-2 text-sm font-bold text-rose-600">
										Please Enter Your Name
									</h6>
								)}
								{errors?.firstName?.type === "maxLength" && (
									<h6 className="pl-2 text-sm  font-bold text-rose-600">
										First name cannot exceed 20 characters
									</h6>
								)}
								{errors?.firstName?.type === "pattern" && (
									<h6 className="pl-2 text-sm  font-bold text-rose-600">
										Alphabetical characters only
									</h6>
								)}
								{/* {errors?.firstName?.watch === "pattern" && (
									<h6 className="pl-2  text-sm font-bold text-rose-600">Ohh</h6>
								)} */}
							</div>
							<div>
								<label
									className="text-sm font-semibold text-black lg:text-base"
									htmlFor="">
									Email Address <sub className="text-xl ml-1 text-red-600">*</sub>{" "}
								</label>
								<div className="mt-1 h-[40px] rounded-sm border-[1px] border-[#8E8E8E]">
									<input
										{...register("email", {
											required: true,
											pattern:
												/[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g,
										})}
										type="text"
										id=""
										className="h-full w-full   border-none bg-transparent pl-3 outline-none placeholder:font-normal placeholder:text-[#8E8E8E]"
										placeholder="Email Address"
									/>
								</div>
								{errors?.email?.type === "required" && (
									<h6 className="pl-2 text-sm font-bold text-rose-600">
										Please Enter Your Email
									</h6>
								)}
								{errors?.email?.type === "pattern" && (
									<h6 className="pl-2 text-sm font-bold text-rose-600">
										Please Enter a Valid Email Address
									</h6>
								)}
							</div>
							<div>
								<label
									className="text-sm font-semibold text-black lg:text-base"
									htmlFor="">
									Phone Number<sub className="text-xl ml-1 text-red-600">*</sub>{" "}
								</label>
								<div className="mt-1 h-[40px]  rounded-sm border-[1px] border-[#8E8E8E]">
									<input
										{...register("phoneNumber", {
											required: true,
											pattern: "^-?[0-9]d*.?d*$",
										})}
										type="number"
										id=""
										className="h-full w-full appearance-none  border-none bg-transparent pl-3 outline-none placeholder:font-normal placeholder:text-[#8E8E8E]"
										placeholder="Phone Number"
									/>
								</div>
								{errors?.phoneNumber?.type === "required" && (
									<h6 className="pl-2 text-sm font-bold text-rose-600">
										Please Enter Phone Number
									</h6>
								)}

								{errors?.phoneNumber?.type === "pattern" && (
									<h6 className="pl-2 text-sm  font-bold text-rose-600">
										Please Enter a Valid Phone Number
									</h6>
								)}
							</div>
							<div>
								<label
									className="text-sm font-semibold text-black lg:text-base"
									htmlFor="">
									Subject<sub className="text-xl ml-1 text-red-600">*</sub>{" "}
								</label>
								<div className="mt-1 h-[40px]  rounded-sm border-[1px] border-[#8E8E8E]">
									<input
										{...register("subject", {
											required: true,
										})}
										type="text"
										id=""
										className="h-full w-full appearance-none  border-none bg-transparent pl-3 outline-none placeholder:font-normal placeholder:text-[#8E8E8E]"
										placeholder="Type issue"
									/>
								</div>
								{errors?.subject?.type === "required" && (
									<h6 className="pl-2 text-sm font-bold text-rose-600">
										Write Something
									</h6>
								)}
							</div>
							<div>
								<label
									className="text-sm font-semibold text-black lg:text-base"
									htmlFor="">
									Description
								</label>
								<div className="mt-1 rounded-sm border-[1px] border-[#8E8E8E]">
									<textarea
										rows={7}
										{...register("text", {
											required: true,
										})}
										type="text"
										id=""
										className="h-full w-full appearance-none  border-none bg-transparent p-3 outline-none placeholder:font-normal placeholder:text-[#8E8E8E]"
										placeholder="Type your message here"
									/>
								</div>
								{errors?.text?.type === "required" && (
									<h6 className="pl-2 text-sm font-bold text-rose-600">
										Write Something
									</h6>
								)}
							</div>
							<div>
								<label
									className="text-sm font-semibold text-black lg:text-base"
									htmlFor="">
									Attach Image
								</label>
								<div className="mt-1 h-[40px]  rounded-sm border-[1px] border-[#8E8E8E]">
									<div class="upload-btn-wrapper relative h-full w-full">
										<button  className="btn absolute flex h-full w-full items-center justify-center gap-1">
											<div>
												<BsCardImage size={20} color="#8E8E8E" />
											</div>
											<div className="text-sm font-medium text-[#8e8e8e]">
												Upload
											</div>
										</button>
										<input className="w-full cursor-pointer" type="file" name="myfile" />
									</div>
								</div>
							</div>
							<button
								className="w-[6rem] mx-auto sm:mx-0 rounded bg-purpleLight py-2 text-center text-sm  uppercase text-white lg:text-base"
								type="submit">
								Submit
							</button>
						</form>
					</div>
				</div>
				<div className="wrapper mt-10 md:mt-20">
					<Footer />
				</div>
			</div>
		</>
	);
};

export default index;
