import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
const Order = () => {
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
							1. Is the book printed on durable paper?
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
				<div className={`  overflow-hidden py-4 transition-all duration-700 `}>
					<div
						onClick={() => setShow(2 && show === 2 ? 0 : 2)}
						className="flex w-full  cursor-pointer justify-between">
						<h1 className="text-base font-bold lg:text-lg">
							2. Are there any additional resources or materials included with
							the purchase
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
								Readrly offers so much more than just personalized storybooks
								for children! When you purchase a book, you get so much more
								than just the story. You get the ability to design the perfect
								book cover for your child, choose from a variety of hardcover,
								paperback, or linen wrap books, and even get a digital copy of
								the book. <br />
								Plus, you get access to additional resources and materials that
								will help your child develop a love of reading. Our app includes
								a wide variety of stories that are tailored to your child’s age
								and interests. Plus, you can take advantage of our coupons and
								get the first 3 months of the app for just £2.99. With Readrly,
								you get more than just a personalized storybook - you get access
								to unlimited learning materials and resources.
							</p>
						</motion.div>
					</motion.div>
				</div>
				<div className={` overflow-hidden py-4 transition-all duration-700 `}>
					<div
						onClick={() => setShow(3 && show === 3 ? 0 : 3)}
						className="flex w-full  cursor-pointer justify-between">
						<h1 className="text-base font-bold lg:text-lg">
							3. Is there a discount for purchasing multiple books?
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
								At Readrly, we understand that parents want the best for their
								children. That’s why we offer discounts for purchasing multiple
								books! When you purchase two or more personalized storybooks,
								you will receive a 10% discount off the total cost. And, if you
								buy four or more books, you will receive a 20% off discount. So,
								stock up on personalized storybooks and make your child’s
								library complete! <br />
								Not only do we offer discounts for multiple purchases, but
								parents can also choose from a variety of book covers and choose
								between hardcover, paperback, or linen wrap books. And, if you
								do decide to buy a personalized storybook, you’ll get a coupon
								to subscribe to our app at £2.99 for the first 3 months, as well
								as a digital copy of your book.
							</p>
						</motion.div>
					</motion.div>
				</div>
				<div className={` overflow-hidden py-4 transition-all duration-700 `}>
					<div
						onClick={() => setShow(4 && show === 4 ? 0 : 4)}
						className="flex w-full  cursor-pointer justify-between">
						<h1 className="text-base font-bold lg:text-lg">
							4. What is the cost of books and shipping?
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
								Are you looking to purchase personalized storybooks for your
								children in bulk? Look no further than Readrly! We offer
								discounts on bulk orders, making it a great way to save money
								and get your kids the personalized books they love.
							</p>
						</motion.div>
					</motion.div>
				</div>
			</motion.div>
		</>
	);
};

export default Order;
