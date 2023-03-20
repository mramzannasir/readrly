/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import { HiPlayCircle } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { BsApple } from "react-icons/bs";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = () => {
	const router = useRouter();
	const [show, setShow] = useState(false);
	useEffect(() => {
		AOS.init({
			duration: 1500,
		});
	}, []);
	return (
		<>
			<div className="w-full  bg-purple ">
				{/*  Navbar*/}
				<div className="wrapper shadow-lg ">
					<div className="contain">
						<Navbar />
					</div>
				</div>
				{/* Banner */}
				<div className="wrapper pt-[60px] pb-[30px] lg:pt-[80px] lg:pb-[30px]">
					<div className="contain flex-col items-center gap-5 text-white lg:flex-row">
						<div className="w-full lg:w-[50%]">
							<h1 className="headings text-center font-black lg:text-left">
								Personalized storybooks for Boys and Girls
							</h1>
							<p className="des my-3 text-center font-medium lg:text-left">
								With our app, we generate on-demand stories that allow children
								to customise their characters, choose their narratives, and
								visualise their adventures.
							</p>
							<button
								onClick={() => router.push("/product")}
								className="b mx-auto flex h-[55px] w-[205px] items-center justify-center rounded-sm bg-white text-base font-extrabold text-black lg:mx-0">
								Personalize Now
							</button>
						</div>
						<div className="w-full lg:w-[50%]">
							<img src="/banner.png" className="mx-auto lg:w-full" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="wrapper my-[40px] sm:my-[60px] md:my-[70px] lg:my-[80px]">
				<div className="contain flex-col items-stretch justify-between gap-3 xl:flex-row">
					<div className="w-full text-center sm:text-left xl:w-[48%]">
						<h1 className="subHeadings font-bold text-black">
							Benefit of Personalizing Books with Readrly
						</h1>
					</div>
					<div className="w-full text-center text-black sm:text-left xl:w-[48%]">
						<p className="des font-medium">
							Readrly&sbquo;s personalized books are the perfect way to
							introduce children to the magical world of reading!{" "}
							<br className="hidden lg:block" /> Our personalized books bring
							children&sbquo;s imaginations to life, sparking their creativity
							and inspiring them to explore new worlds and possibilities.
						</p>
					</div>
				</div>
				<div className="contain mt-4">
					<img src="l-1.png" className="w-full" alt="" />
				</div>
			</div>
			{/* Download Section */}
			<div className="w-full">
				<h1
					data-aos="fade-up"
					className="title text-center font-extrabold text-black">
					Download a Sample Of Our Free Personalized Storybooks
				</h1>
				<p data-aos="fade-up" className="des text-center text-black">
					Our stories will bring out the creativity and imagination in your
					children
				</p>
				<div className="wrapper my-6 md:my-12">
					<div className="contain flex-col flex-wrap items-center justify-between gap-6 md:flex-row  lg:flex-row lg:flex-nowrap lg:gap-10">
						<div
							data-aos="fade-up"
							className="flex h-[363px] w-full flex-col shadow-md md:w-[48%]  lg:w-full">
							<div className="flex h-[60%]  w-full items-center justify-center rounded-t-sm bg-[#EFEEF4]">
								<img src="/book-1.png" className="h-[180px]" alt="" />
							</div>
							<div className="flex h-[40%] w-full flex-col items-start justify-center gap-3 rounded-b-sm pl-4 ">
								<p className="text-base font-bold text-black md:text-base">
									Personalized Adventure Book
								</p>
								<p className="text-sm font-normal text-[#8E8E8E]">
									A story about Klara & her friends adventure
								</p>
								<p className="text-sm  font-medium text-black">Age 0-5</p>
							</div>
						</div>
						<div
							data-aos="fade-down"
							className="flex h-[363px] w-full flex-col shadow-md md:w-[48%]  lg:w-full">
							<div className="flex h-[60%]  w-full items-center justify-center rounded-t-sm bg-[#E9F7F4]">
								<img src="/book-2.png" className="h-[180px]" alt="" />
							</div>
							<div className="flex h-[40%] w-full flex-col items-start justify-center gap-3 rounded-b-sm pl-4 ">
								<p className="text-base font-bold text-black md:text-base">
									Personalized Magical Hunt Adventure
								</p>
								<p className="text-sm font-normal text-[#8E8E8E]">
									A story about about adventure and discovery
								</p>
								<p className="text-sm  font-medium text-black">Age 5-7</p>
							</div>
						</div>
						<div
							data-aos="fade-up"
							className="flex h-[363px] w-full flex-col shadow-md md:w-[48%]  lg:w-full">
							<div className="flex h-[60%]  w-full items-center justify-center rounded-t-sm bg-[#FBE9E7]">
								<img src="/book-3.png" className="h-[180px]" alt="" />
							</div>
							<div className="flex h-[40%] w-full flex-col items-start justify-center gap-3 rounded-b-sm pl-4 ">
								<p className="text-base font-bold text-black md:text-base">
									Readrly Personalized Book For Toddlers
								</p>
								<p className="text-sm font-normal text-[#8E8E8E]">
									A story about learning Kindness and being nice
								</p>
								<p className="text-sm  font-medium text-black">Age 0-5</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<button className="mx-auto flex h-[55px] w-[205px] items-center justify-center gap-2 rounded-sm bg-[#8858ED] text-base font-extrabold text-white  ">
						<h1>Personalize Now</h1>
						<BsChevronDoubleRight size={15} />
					</button>
				</div>
			</div>

			{/* Video Section */}
			<div data-aos="fade-up" className="wrapper relative">
				<div className="contain my-7 md:my-14">
					<div className="relative h-[200px] w-full md:h-[501px]">
						<img
							src="/1.png"
							className="absolute top-0 left-0 h-full  w-full"
							alt=""
						/>
						<div
							onClick={() => setShow(!show)}
							className="absolute flex h-full w-full cursor-pointer items-center justify-center text-6xl md:text-8xl ">
							<HiPlayCircle color="white" />
						</div>
						<div className="title absolute mt-12 w-full ">
							<p className="hidden text-center font-semibold text-white sm:block">
								Watch how Readrly makes reading fun and imaginative
							</p>
						</div>
					</div>
				</div>
				<div
					className={`absolute ${
						show ? "block" : "hidden"
					} top-0 left-0 h-screen w-full bg-black bg-opacity-40`}>
					<div className="mx-auto mt-20 w-[100%] sm:w-[80%]">
						<iframe
							width="100%"
							height="520"
							src="https://www.youtube.com/embed/_kKQxidAlGw"
							title=""
							autoPlay="true"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen></iframe>
					</div>
				</div>
				<div
					onClick={() => setShow(!show)}
					className={`absolute top-2 ${
						show ? "block" : "hidden"
					} right-2 cursor-pointer text-white`}>
					<GrClose size={30} color="white" />
				</div>
			</div>
			{/* Get section */}
			<div
				data-aos="fade-up"
				className="wrapper mt-5 transition-all duration-500">
				<div className="subHeadings text-center font-black text-black">
					What You Get From Us{" "}
				</div>
				<div className="contain relative flex-col gap-4 pt-16 lg:flex-row lg:items-center lg:justify-between lg:pt-28">
					<div className="flex w-full flex-col lg:w-[48%]">
						<div className="flex items-center gap-1 md:gap-2">
							<div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-[#FFF0D9] text-xl font-extrabold text-[#FDA923] md:h-[3rem] md:w-[3rem]">
								1
							</div>
							<div className="title font-extrabold text-black">
								Customizable Characters
							</div>
						</div>
						<p
							data-aos="zoom-in"
							className="des my-4 font-normal text-black md:my-6">
							See yourself in the main role with our character{" "}
							<br className="hidden xl:block   " /> customization, or{" "}
							<br className="hidden lg:block" />
							pick from our default characters
						</p>
						<div className="flex w-full items-center justify-between gap-2 xl:justify-start ">
							<img data-aos="fade-up" src="1-3.png" alt="" />
							<img data-aos="fade-down" src="1-4.png" alt="" />
							<img data-aos="fade-up" src="1-5.png" alt="" />
							<img data-aos="fade-down" src="1-2.png" alt="" />
						</div>
					</div>
					<div className="w-full lg:w-[48%] lg:pl-8">
						<img
							data-aos="fade-up"
							src="/child-1.png"
							className="mx-auto"
							alt=""
						/>
					</div>
					<div className="absolute top-1 right-1 hidden sm:block">
						<img src="1-1.png" alt="" />
					</div>
				</div>
				<div className="contain relative flex-col gap-4 pt-16 lg:flex-row lg:items-center lg:justify-between lg:pt-28">
					<div className="w-full lg:w-[48%] lg:pr-8">
						<img
							data-aos="fade-up"
							src="/child-2.png"
							className="mx-auto lg:mx-0"
							alt=""
						/>
					</div>
					<div className="flex w-full flex-col lg:w-[48%] lg:items-end lg:justify-end">
						<div className="w-full lg:w-[75%]">
							<div className="flex  items-center gap-1 md:gap-2">
								<div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-[#FFF0D9] text-xl font-extrabold text-[#FDA923] md:h-[3rem] md:w-[3rem]">
									2
								</div>
								<div className="title font-extrabold text-black">
									Unlimited Stories
								</div>
							</div>
						</div>
						<div data-aos="fade-up" className="w-full  lg:w-[75%]">
							<p className="des my-4 font-normal text-black md:my-6">
								Readrly creates new stories whenever you want them, for endless
								fun for your kids and reduce home clutter, all you have to do is
								fill in necessary information about the child you want to
								personalize for.
							</p>
						</div>
					</div>
				</div>
				<div className="contain relative flex-col gap-4 pt-16 lg:flex-row lg:items-center lg:justify-between lg:pt-28">
					<div className="flex w-full flex-col lg:w-[48%]">
						<div className="flex items-center gap-1 md:gap-2">
							<div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-[#FFF0D9] text-xl font-extrabold text-[#FDA923] md:h-[3rem] md:w-[3rem]">
								3
							</div>
							<div className="title font-extrabold text-black">
								Engaging Imaginery
							</div>
						</div>
						<p
							data-aos="zoom-in"
							className="des my-4 font-normal text-black md:my-6">
							We create soft animations, appropriate for children, that <br />{" "}
							match what your reading as you travel through your story
						</p>
					</div>
					<div className="w-full lg:w-[48%] lg:pl-8">
						<img
							data-aos="fade-up"
							src="/child-3.png"
							className="mx-auto"
							alt=""
						/>
					</div>
					<div
						data-aos="zoom-in"
						className="absolute top-1 right-1 hidden sm:block">
						<img src="1-1.png" alt="" />
					</div>
				</div>
				<div className="contain relative flex-col gap-4 pt-16 lg:flex-row lg:items-center lg:justify-between lg:pt-28">
					<div className="w-full lg:w-[48%] lg:pr-8">
						<img
							data-aos="fade-up"
							src="/child-4.png"
							className="mx-auto lg:mx-0"
							alt=""
						/>
					</div>
					<div className="flex w-full flex-col lg:w-[48%] lg:items-end lg:justify-end">
						<div className="w-full lg:w-[75%]">
							<div className="flex  items-center gap-1 md:gap-2">
								<div className="flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full bg-[#FFF0D9] text-xl font-extrabold text-[#FDA923] md:h-[3rem] md:w-[3rem]">
									4
								</div>
								<div className="title font-extrabold text-black">
									Supportive Reading
								</div>
							</div>
						</div>
						<div data-aos="fade-up" className="w-full  lg:w-[75%]">
							<p className="des my-4 font-normal text-black md:my-6">
								Readrly ensures you improve the bond with your child, by
								creating interactive stories you can read to your child. The
								quality time spent together while reading the story, will make
								them feel very special.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* Side  by side sections */}
			<div className="wrapper mt-[5rem] bg-gray py-[40px] md:mt-[10rem] lg:py-[74px]">
				<div
					data-aos="fade-up"
					className="contain flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
					<div className="w-full lg:w-[48%]">
						<h1 className="mtitle text-center font-extrabold text-black sm:text-left">
							No two stories are the same.
						</h1>
						<p className="des my-4 text-center text-black  sm:text-left lg:my-6">
							Our books are customized to each individual child and can feature
							their name, favorite characters, and even a special message from a
							loved one. Our books come in a variety of book covers, hardcover,
							paperback and linen wraps, so families can choose the perfect look
							for their childs personalized book.
						</p>
						<div className="flex w-full justify-center sm:justify-start">
							<button className=" h-[55px] w-[90%] rounded-sm bg-yellow text-base font-bold sm:w-[50%]  lg:text-lg">
								Start Customization Now
							</button>
						</div>
					</div>
					<div className="flex w-full lg:w-[43%] lg:justify-end">
						<img src="/2.png" className="w-full  lg:h-[340px]" alt="" />
					</div>
				</div>
			</div>
			<div className="wrapper mt-[5rem]   md:mt-[10rem]">
				<div
					data-aos="fade-up"
					className="contain flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
					<div className="flex w-full lg:w-[43%] lg:justify-end">
						<img src="/3.png" className="w-full " alt="" />
					</div>
					<div className="w-full lg:w-[48%]">
						<h1 className="text-center text-xl font-extrabold text-black sm:text-left md:text-2xl">
							Bring out the creativity in your children by making them
							imaginative book readers.
						</h1>
						<p className="des my-4 text-center text-black  sm:text-left lg:my-6">
							At Readrly, we also offer a wide range of ready-made ebook books
							and print on demand books for children from all parts of the
							world. Our books cover topics from Christmas stories to fantasy
							<span className="lg:hidden xl:block">
								adventures and are available on amazon. Plus, our app is packed
								full of stories, so your children never run out of things to
								read.
								<br /> <br />
							</span>
							<span className="lg:hidden xl:block">
								At Readrly, we make it possible to create a personalized
								storybook that is truly unique and special to your child. With
								our wide range of books and our fast customization and shipping,
								we make sure that your childs storybook is perfect and arrives
								in no time!
							</span>
						</p>
						<div className="flex w-full justify-center sm:justify-start">
							<button className=" flex h-[55px] w-[55%] items-center justify-center gap-1 rounded-sm bg-purple text-base font-bold text-white sm:w-[26%] lg:text-lg">
								<p>Learn More</p>
								<BsChevronDoubleRight size={18} />
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="wrapper mt-[5rem] bg-gray py-[40px] md:mt-[10rem]">
				<div
					data-aos="fade-up"
					className="contain flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
					<div className="w-full lg:w-[48%]">
						<h1 className="mtitle text-center font-extrabold text-black sm:text-left">
							Customize storybooks for your children from any device.
						</h1>
						<p className="des my-4 text-center  sm:text-left lg:my-6">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
							vulputate libero et velit interdum, ac aliquet odio mattis. Class
							aptent taciti sociosqu ad litora torquent per conubia nostra, per
							inceptos himenaeos.
						</p>
						<div className="flex w-full justify-center gap-2 sm:justify-start">
							<button className=" flex h-[55px] w-[9rem] items-center justify-center gap-2 rounded-sm bg-black text-base font-bold sm:gap-3  lg:text-lg">
								<div>
									<BsApple color="white" size={24} />
								</div>
								<div className="flex flex-col items-start justify-start gap-0">
									<h1 className="text-[13px] font-light text-white text-opacity-70  ">
										Download on the
									</h1>
									<h1 className="-mt-1 text-sm font-medium text-white">
										App Store
									</h1>
								</div>
							</button>
							<button className=" flex h-[55px] w-[9rem] items-center justify-center gap-2 rounded-sm bg-black text-base font-bold sm:gap-3  lg:text-lg">
								<div>
									<IoLogoGooglePlaystore color="white" size={24} />
								</div>
								<div className="flex flex-col items-start justify-start gap-0">
									<h1 className="text-[13px] font-light text-white text-opacity-70">
										Download on the
									</h1>
									<h1 className="-mt-1 text-sm font-medium text-white">
										Playstore
									</h1>
								</div>
							</button>
						</div>
					</div>
					<div className="flex w-full lg:w-[43%] lg:justify-end">
						<img src="/4.png" className="w-full  " alt="" />
					</div>
				</div>
			</div>

			{/* Footer */}
			<div className="wrapper ">
				<Footer />
			</div>
		</>
	);
};
export default Layout;
