import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
const Customize = () => {
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
							1. Are there any customization options available?
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
								At Readrly, we believe that personalization is key to creating a
								unique and special experience for your child. We offer a wide
								range of customization options that will make your childs
								storybook a one-of-a-kind treasure. With Readrly, you can
								customize the cover of your storybook with a variety of designs
								to choose from. You can also choose if you want a hardcover,
								paperback, or linen wrap version of your storybook. Plus, you
								can personalize the story even further with a variety of
								questions that our AI storyteller will use to create a unique
								and personalized storybook for your child. At Readrly, we
								understand that every child is unique and deserves a special
								storybook tailored just for them. That’s why we offer a variety
								of customization options to make your childs storybook truly
								one-of-a-kind. So dont wait any longer, give your child a
								storybook theyll love forever with Readrly.
							</p>
						</motion.div>
					</motion.div>
				</div>
				<div className={`  overflow-hidden py-4 transition-all duration-700 `}>
					<div
						onClick={() => setShow(2 && show === 2 ? 0 : 2)}
						className="flex w-full  cursor-pointer justify-between">
						<h1 className="text-base font-bold lg:text-lg">
							2. How long does customizing and ordering a book take?
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
								At Readrly, we know how important it is for your child to have
								their own personalized book that they can treasure forever.
								That’s why we make the process of ordering a personalized book
								easy and fast. From the moment you choose the book cover,
								hardcover, paperback, or linen wrap option, to customizing and
								ordering a book with Readrly takes no more than 48-72 hours. We
								make sure that you and your child can enjoy their book in no
								time!
							</p>
						</motion.div>
					</motion.div>
				</div>
				<div className={` overflow-hidden py-4 transition-all duration-700 `}>
					<div
						onClick={() => setShow(3 && show === 3 ? 0 : 3)}
						className="flex w-full  cursor-pointer justify-between">
						<h1 className="text-base font-bold lg:text-lg">
							3.How do you ensure the quality of the illustrations and stories?:
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
								our customers. That’s why we go the extra mile to ensure our
								products meet the highest standards. We use a combination of
								state-of-the-art technology and carefully selected artists to
								create the best illustrations and stories for your child. Our AI
								storyteller uses natural language processing technology to
								generate stories tailored to your child’s interests, while our
								team of illustrators use their creativity and skill to bring
								these stories to life. Our team also employs a rigorous quality
								assurance process, which includes both automated and manual
								tests. This process ensures that all stories and illustrations
								are accurate, consistent, and appropriate for children. <br />{" "}
								At Readrly, we take pride in providing exceptional products for
								your child. We hope youll join us in our mission to create
								stories that will inspire children for years to come.
							</p>
						</motion.div>
					</motion.div>
				</div>
			</motion.div>
		</>
	);
};

export default Customize;
