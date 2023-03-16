import React from "react";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useRouter } from "next/router";

const Footer = () => {
	const router = useRouter();
	return (
		<>
			<div className="wrapper bg-purpleLight">
				<div className="contain flex-col py-[30px] text-white md:py-[40px]">
					<div className="flex w-full flex-col items-center justify-center">
						<div className="w-full">
							<p className="des text-center font-medium text-white">
								Get immersed in a new world of story telling
							</p>
							<p className="subTitle my-2  text-center font-extrabold">
								Subscribe for Updates
							</p>
						</div>
						<div className="flex h-[3rem] w-full items-center justify-around rounded-sm bg-white px-3 md:w-[80%] lg:w-[70%] xl:w-[50%]">
							<input
								type="text"
								placeholder="Email Address"
								className="placeholder:text-bold h-full w-[80%] rounded-sm border-none pr-2 text-black outline-none placeholder:text-black"
							/>
							<button className="rounded-sm border-none bg-purpleLight py-1 px-3 outline-none">
								Subscribe
							</button>
						</div>
					</div>
				</div>
				<div className="my-[40px] h-[1px] w-full bg-white bg-opacity-20"></div>
			</div>
			{/* Items */}
			<div className="wrapper bg-purpleLight text-white">
				<div className="contain flex-col gap-10 ">
					<div className="flex w-full flex-col items-stretch justify-between gap-8 lg:flex-row">
						<div className="w-full md:w-[40%]">
							<ul className="des flex flex-col gap-3">
								<li className="font-extrabold">About us</li>
								<li>About Readrly</li>
								<li>Privacy & Policy</li>
								<li
									onClick={() => router.push("/conditions")}
									className="cursor-pointer ">
									Terms & Conditions
								</li>
							</ul>
						</div>
						<div className="flex w-full flex-col gap-6 md:flex-row md:justify-between lg:w-[60%]">
							<ul className="des flex flex-col gap-3">
								<li className="font-extrabold">Navigation</li>
								<li>Customize</li>
								<li>Track order</li>
							</ul>{" "}
							<ul className="des flex flex-col gap-3">
								<li className="font-extrabold">Help & Support</li>
								<li>Contact Us</li>
								<li>FAQs</li>
							</ul>{" "}
							<ul className="des flex flex-col gap-3">
								<li className="font-extrabold">Social Media</li>
								<li className="flex items-center gap-1">
									<div>
										<CgFacebook size={20} />
									</div>
									<div>Facebook</div>
								</li>
								<li className="flex items-center gap-1">
									<div>
										<AiOutlineTwitter size={20} />
									</div>
									<div>Twitter</div>
								</li>
								<li className="flex items-center gap-1">
									<div>
										<FaLinkedinIn size={20} />
									</div>
									<div>Linkedin</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="mt-10 mb-6">
					<div>
						<p className="des cursor-pointer underline underline-offset-4 opacity-70">
							Powered by Readrly
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default Footer;
