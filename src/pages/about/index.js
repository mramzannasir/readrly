import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const index = () => {
	return (
		<>
			<div className="wrapper bg-purple">
				<div className="contain">
					<Navbar />
				</div>
			</div>
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.4, opacity: 0 }}
				transition={{ type: "spring", duration: 1 }}
				className="wrapper mt-[40px] gap-[3rem] text-black lg:mt-[60px] lg:gap-[6rem] lgg:gap-[8rem]">
				<div className="contain flex-col items-center gap-3 lgg:flex-row lgg:items-stretch lgg:justify-between lgg:gap-0 ">
					<div className="w-full lgg:w-[48%]">
						<h1 className="text-[22px] font-extrabold leading-[1.5rem]  md:text-[24px] lg:leading-[2.5rem] xl:text-[36px] ">
							About us
						</h1>
						<p className="des mt-3">
							At Readrly, we believe that there is nothing more powerful than a
							story. Stories shape how we learn, challenge, and strengthen our
							values. When a story catches our attention and engages us, we are
							more likely to absorb the message and meaning within it. This is
							why weve created Readrly.{" "}
						</p>
						<p className="des mt-3">
							Our books are customized to each individual child and can feature
							their name, favorite characters, and even a special message from a
							loved one. Readrlys books are more than just stories; they help
							children learn and grow, teaching them valuable lessons and
							enriching their minds
						</p>
					</div>
					<div className="w-full lgg:w-[48%]">
						<img src="/about-1.png" className="w-full lgg:h-[350px]" alt="" />
					</div>
				</div>
				<div className="contain  flex-col items-center gap-3  lgg:flex-row  lgg:justify-between lgg:gap-0 xl:items-end ">
					<div className="w-full  lgg:w-[48%]">
						<img src="/about-2.png" className="w-full lgg:h-[380px] " alt="" />
					</div>
					<div className="w-full  lgg:w-[48%] xl:mb-5">
						<h1 className="text-[22px] font-extrabold leading-[1.5rem]  md:text-[24px] lg:leading-[2.5rem] xl:text-[36px] ">
							Trusted by all <br className="hidden lg:inline-block" /> Parents
						</h1>
						<p className="des mt-3 lg:mt-6">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
							turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
							nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
							tellus elit sed risus. Maecenas eget condimentum velit, sit amet
							feugiat lectus. Class aptent taciti sociosqu ad litora torquent
							per conubia nostra, per inceptos himenaeos. Praesent auctor purus
							luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
							rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
							vel bibendum lorem. Morbi convallis convallis diam sit amet
							lacinia. Aliquam in elementum tellus.
						</p>
					</div>
				</div>
				<div className="contain">
					<h1 className="text-[22px] font-extrabold leading-[1.5rem]  md:text-[24px] lg:leading-[2.5rem] xl:text-[36px] ">
						Our Values
					</h1>
				</div>
				<div className="contain">
					<div className="grid h-full w-full grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2  lg:gap-x-10 lgg:grid-cols-3 xl:grid-cols-4">
						<div className="a flex h-[270px] w-full flex-col items-center justify-center">
							<img src="/about-c-1.png" alt="" />
							<p className="des my-3 font-bold text-purpleLight">Creativity</p>
							<p className="des text-black">Develop Imagination</p>
						</div>
						<div className="a flex h-[270px] w-full flex-col items-center justify-center">
							<img src="/about-c-2.png" alt="" />
							<p className="des my-3 font-bold text-purpleLight">Adventure</p>
							<p className="des text-black">Explore the unknown</p>
						</div>
						<div className="a flex h-[270px] w-full flex-col items-center justify-center">
							<img src="/about-c-3.png" alt="" />
							<p className="des my-3 font-bold text-purpleLight">Learning</p>
							<p className="des text-black">Inspire curiosity</p>
						</div>
						<div className="a flex h-[270px] w-full flex-col items-center justify-center">
							<img src="/about-c-4.png" alt="" />
							<p className="des my-3 font-bold text-purpleLight">Family</p>
							<p className="des text-black">Strengthen bonds</p>
						</div>
					</div>
				</div>

				<div className="contain flex-col items-center gap-3 lgg:flex-row lgg:items-stretch lgg:justify-between lgg:gap-0 ">
					<div className="w-full lgg:w-[48%]">
						<h1 className="text-[22px] font-extrabold leading-[1.5rem]  md:text-[24px] lg:leading-[2.5rem] xl:mt-3 xl:text-[36px]">
							Customization Available For Schools and Libraries
						</h1>
						<p className="des mt-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
							turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
							nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
							tellus elit sed risus. Maecenas eget condimentum velit, sit amet
							feugiat lectus. Class aptent taciti sociosqu ad litora torquent
							per conubia nostra, per inceptos himenaeos. Praesent auctor purus
							luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
							rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
							vel bibendum lorem. Morbi convallis convallis diam sit amet
							lacinia. Aliquam in elementum tellus.
						</p>
					</div>
					<div className="w-full lgg:w-[48%]">
						<img src="/about-3.png" className="w-full lgg:h-[350px]" alt="" />
					</div>
				</div>
				<div className="wrapper">
					<Footer />
				</div>
			</motion.div>
		</>
	);
};

export default index;
