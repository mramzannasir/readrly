import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import Footer from "@/components/Footer";
const Books = () => {
	const [show, setShow] = useState(1);
	return (
		<>
			<motion.div
				className="flex w-full flex-col text-black "
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.4, opacity: 0 }}
				transition={{ type: "spring", duration: 1 }}>
				<div className={`overflow-hidden py-4 transition-all duration-700 `}>
					<div
						onClick={() => setShow(1 && show === 1 ? 0 : 1)}
						className="flex w-full  cursor-pointer justify-between">
						<h1 className="text-base font-bold lg:text-lg">
							1. What age range is the book appropriate for?
						</h1>
						<div>{show === 1 ? <BsChevronUp /> : <BsChevronDown />}</div>
					</div>
					<motion.div className="mt-1 overflow-hidden">
						<motion.div
							animate={{
								opacity: show === 1 ? 1 : 0,
								y: show === 1 ? 1 : -100,
							}}
							transition={{ duration: 0.5 }}>
							{/* duration: 1 */}
							<p className={`des ${show === 1 ? "block" : "hidden"} `}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Repellat nihil iste autem quod voluptates modi dolor. Ullam
								architecto, dolorem consectetur beatae dolorum amet harum. Ipsam
								rerum velit facere consectetur nihil? Our stories are written to
								appeal to a range of ages, so both you and your child can enjoy
								them. We use simple language that is easy to understand, but
								still leaves plenty of room for imagination. We make sure that
								Our stories are educational and entertaining, so your child gets
								the most out of their reading experience. At Readrly, we
								understand that each child is unique and that’s why we focus on
								creating personalized storybooks for each and every one of them.
								Our stories are designed to be enjoyed by children ages 0-9,
								giving them an enjoyable and educational experience.
							</p>
						</motion.div>
					</motion.div>
				</div>
				<div className={`  overflow-hidden py-4 transition-all duration-700 `}>
					<div
						onClick={() => setShow(2 && show === 2 ? 0 : 2)}
						className="flex w-full  cursor-pointer justify-between">
						<h1 className="text-base font-bold lg:text-lg">
							2. Is the book printed on durable paper
						</h1>
						<div>{show === 2 ? <BsChevronUp /> : <BsChevronDown />}</div>
					</div>
					<motion.div className="mt-1 overflow-hidden">
						<motion.div
							animate={{
								opacity: show === 2 ? 1 : 0,
								y: show === 2 ? 1 : -100,
							}}
							transition={{ duration: 0.5 }}>
							{/* duration: 1 */}
							<p className={`des ${show === 2 ? "block" : "hidden"} `}>
								At Readrly, we understand that children are often rough on their
								books. That’s why all of our books are printed on durable,
								high-quality paper that can stand up to your child’s adventures.
								Whether your child likes to take their book with them on the go
								or has a tendency to read their books in the bathtub, our books
								will last through all of their adventures. Our paper is thick
								and sturdy, so you can trust that your child’s book will look
								great for years to come. Plus, all of our books come with a
								hardcover or linen wrap option to protect the pages. So your
								child’s book will look just as good on the last page as it did
								on the first. With Readrly, you can trust that your child’s
								stories will be a part of their memories for years to come.
							</p>
						</motion.div>
					</motion.div>
				</div>
				<div className={` overflow-hidden py-4 transition-all duration-700 `}>
					<div
						onClick={() => setShow(3 && show === 3 ? 0 : 3)}
						className="flex w-full  cursor-pointer justify-between">
						<h1 className="text-base font-bold lg:text-lg">
							3. What educational benefits or value do the stories have?:
						</h1>
						<div>{show === 3 ? <BsChevronUp /> : <BsChevronDown />}</div>
					</div>
					<motion.div className="mt-1 overflow-hidden">
						<motion.div
							animate={{
								opacity: show === 3 ? 1 : 0,
								y: show === 3 ? 1 : -100,
							}}
							transition={{ duration: 0.5 }}>
							{/* duration: 1 */}
							<p className={`des ${show === 3 ? "block" : "hidden"} `}>
								At Readrly, we are dedicated to creating personalized,
								educational storybooks that are designed to engage and entertain
								children of all ages. Our stories provide an interactive and
								immersive learning experience that helps to boost creativity and
								imagination. With customised stories tailored to each and every
								child, our stories provide valuable lessons and experiences that
								can be carried and applied to real-life situations. From
								learning about the importance of kindness and respect to
								exploring the natural world, our stories will help children to
								develop and grow in countless ways. Moreover, our stories are
								designed to help children develop important reading and writing
								skills. With stories that are tailored to each child’s specific
								interests and abilities, our stories will help to reinforce the
								basics of language while also introducing children to more
							</p>
						</motion.div>
					</motion.div>
				</div>
				<div className={` overflow-hidden py-4 transition-all duration-700 `}>
					<div
						onClick={() => setShow(4 && show === 4 ? 0 : 4)}
						className="flex w-full  cursor-pointer justify-between">
						<h1 className="text-base font-bold lg:text-lg">
							4. What educational benefits or value do the stories have?:
						</h1>
						<div>{show === 4 ? <BsChevronUp /> : <BsChevronDown />}</div>
					</div>
					<motion.div className="mt-1 overflow-hidden">
						<motion.div
							animate={{
								opacity: show === 4 ? 1 : 0,
								y: show === 4 ? 1 : -100,
							}}
							transition={{ duration: 0.5 }}>
							{/* duration: 1 */}
							<p className={`des ${show === 4 ? "block" : "hidden"} `}>
								At Readrly, we are dedicated to creating personalized,
								educational storybooks that are designed to engage and entertain
								children of all ages. Our stories provide an interactive and
								immersive learning experience that helps to boost creativity and
								imagination. With customised stories tailored to each and every
								child, our stories provide valuable lessons and experiences that
								can be carried and applied to real-life situations. From
								learning about the importance of kindness and respect to
								exploring the natural world, our stories will help children to
								develop and grow in countless ways. Moreover, our stories are
								designed to help children develop important reading and writing
								skills. With stories that are tailored to each child’s specific
								interests and abilities, our stories will help to reinforce the
								basics of language while also introducing children to more
							</p>
						</motion.div>
					</motion.div>
				</div>
				<div className={` overflow-hidden py-4 transition-all duration-700 `}>
					<div
						onClick={() => setShow(5 && show === 5 ? 0 : 5)}
						className="flex w-full  cursor-pointer justify-between">
						<h1 className="text-base font-bold lg:text-lg">
							5. What materials are used to create the storybooks?:
						</h1>
						<div>{show === 5 ? <BsChevronUp /> : <BsChevronDown />}</div>
					</div>
					<motion.div className="mt-1 overflow-hidden">
						<motion.div
							animate={{
								opacity: show === 5 ? 1 : 0,
								y: show === 5 ? 1 : -100,
							}}
							transition={{ duration: 0.5 }}>
							{/* duration: 1 */}
							<p className={`des ${show === 5 ? "block" : "hidden"} `}>
								At Readrly, we use only the best materials to create our
								personalized storybooks for children. Our hardcover books are
								printed on thick, high-quality paper with a glossy finish for a
								professional look and feel. In addition, we use a special linen
								wrap for our paperback books to give them a unique touch. Our
								books are printed with vivid colors and are sure to grab the
								attention of children and parents alike. We understand that your
								childs storybook is a cherished possession and we are committed
								to providing the best materials to make it a truly special and
								unique experience.
							</p>
						</motion.div>
					</motion.div>
				</div>
				<div className={` overflow-hidden py-4 transition-all duration-700 `}>
					<div
						onClick={() => setShow(6 && show === 6 ? 0 : 6)}
						className="flex w-full  cursor-pointer justify-between">
						<h1 className="text-base font-bold lg:text-lg">
							6. What stories does the website offer?
						</h1>
						<div>{show === 6 ? <BsChevronUp /> : <BsChevronDown />}</div>
					</div>
					<motion.div className="mt-1 overflow-hidden">
						<motion.div
							animate={{
								opacity: show === 6 ? 1 : 0,
								y: show === 6 ? 1 : -100,
							}}
							transition={{ duration: 0.5 }}>
							{/* duration: 1 */}
							<p className={`des ${show === 6 ? "block" : "hidden"} `}>
								At Readrly, we believe that everyone should have access to
								stories that speak to their own unique experiences. Our
								personalized stories are designed to bring out the best in every
								child, while helping them develop a love of reading. We offer a
								wide variety of stories that range from classic tales to modern
								adventures. From exciting sci-fi to cozy bedtime stories,
								Readrly has something for everyone!
							</p>
						</motion.div>
					</motion.div>
				</div>
			</motion.div>
		</>
	);
};

export default Books;
