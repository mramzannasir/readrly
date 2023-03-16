import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

const Shipping = () => {
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
							1. How long does it take for the book to be delivered?
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
								At Readrly, we understand that you want your personalized
								storybooks to arrive quickly and safely. Thats why we guarantee
								that your book will be delivered within 7 to 14 business days.
								We know that children cant wait to get their hands on their very
								own personalized storybooks, so we make sure that they will
								arrive as soon as possible. We take extra care to package the
								books and use a reliable shipping. Our personalized books are
								also great value for money, with prices between £19.99 and
								£39.99. Plus, when you purchase a book, you get a coupon to
								subscribe to our app for just £2.99 for the first 3 months and a
								digital copy of the book.
							</p>
						</motion.div>
					</motion.div>
				</div>
				<div className={`  overflow-hidden py-4 transition-all duration-700 `}>
					<div
						onClick={() => setShow(2 && show === 2 ? 0 : 2)}
						className="flex w-full  cursor-pointer justify-between">
						<h1 className="text-base font-bold lg:text-lg">
							2. What is the cost of books and shipping?
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
								We are proud to offer books that cost between £19.99 and £39.99
								and include free shipping in the UK. We also provide coupon
								codes to our customers for three months of access to our app for
								only £2.99. With every purchase, you will also receive a free
								digital copy of your personalized book. At Readrly, we guarantee
								your satisfaction and understand that your child’s story is
								unique and special. We promise to make sure each book is
								tailored just for them, so they can have an amazing experience
								that they can enjoy and remember for years to come.
							</p>
						</motion.div>
					</motion.div>
				</div>
				<div className={` overflow-hidden py-4 transition-all duration-700 `}>
					<div
						onClick={() => setShow(3 && show === 3 ? 0 : 3)}
						className="flex w-full  cursor-pointer justify-between">
						<h1 className="text-base font-bold lg:text-lg">
							3. Are the storybooks printed on demand and delivered directly to
							the customer?
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
								At Readrly, we understand how important it is for parents to
								find the perfect storybook for their children – and that’s why
								we’ve made it easier than ever. Our personalized storybooks are
								printed on demand and delivered directly to the customer, so
								they can be sure they’re getting the exact storybook they want.{" "}
								<br />
								We know that ordering books online can be a hassle, so we make
								it easier for you. Our books are printed within 48-72 hours and
								can be shipped anywhere in the world, with delivery times
								ranging from 7-9 days in Europe and the United States and 14-21
								days in other countries. <br />
								Plus, our prices are affordable – you can choose from a
								selection of books priced between £19.99 and £39.99, and each
								purchase comes with a coupon to subscribe to our app at just
								£2.99 for the first three months, as well as a digital copy of
								your book. <br />
								At Readrly, we know that children’s stories are special and we
								make sure that every book is special too. With personalized
								storybooks printed on demand and delivered directly to you, you
								can be sure that your child will get the perfect storybook –
								without any hassle.
							</p>
						</motion.div>
					</motion.div>
				</div>
				
			</motion.div>
		</>
	);
};

export default Shipping;
