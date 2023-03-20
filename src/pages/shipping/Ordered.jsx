import React from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";

const Ordered = () => {
	const router = useRouter();
	return (
		<>
			<div className="wrapper  bg-purple">
				<div className="contain">
					<Navbar />
				</div>
			</div>
			<div className="wrapper pt-[10rem] text-black md:mt-[5rem]">
				<div className="b w-[95%] rounded-sm  py-6 px-2 md:w-[600px] md:px-4">
					<div className="flex w-full  justify-end">
						<div
							onClick={() => router.push("/")}
							className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#f2f2f2] text-[16px] font-extrabold text-black">
							X
						</div>
					</div>
					<div className="mt-[3rem]">
						<p className="title text-center font-extrabold">
							Payment successful :
						</p>
					</div>
					<div className="my-6 h-[1px] w-full bg-[#8e8e8e] bg-opacity-40"></div>
					<div className="flex w-full flex-col items-center justify-center">
						<div className="grid grid-cols-2 gap-4 sm:w-[15rem]">
							<div className="des text-center font-semibold text-black">
								Amount Paid :
							</div>
							<div> $60</div>
						</div>
						<div className="mt-3 grid grid-cols-2 gap-4 sm:w-[17rem]">
							<div className="des text-center font-semibold text-black">
								Order Number :
							</div>
							<div>3878127981</div>
						</div>
					</div>
					<div className="flex items-center justify-center">
						<div className="des mt-5 flex h-[40px] w-[80%] cursor-pointer items-center justify-center rounded-sm bg-purpleLight  text-white">
							Track Order
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Ordered;
