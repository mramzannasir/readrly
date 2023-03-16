import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
const Privacy = () => {
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
							1.What is the return policy?
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
								At Readrly, we want to make sure that you and your child are
								happy with the personalized storybook you receive. Thats why we
								offer a generous return policy – if you are not completely
								satisfied with your book, you can return it for a full refund.
								To qualify for a return, the book must be unused and undamaged,
								and must be returned within 30 days of receiving it. Please note
								that return shipping costs are the responsibility of the
								customer. <br />
								Our customer service team is here to help if you have any
								questions. We are dedicated to providing the best customer
								service experience and will do our best to ensure you and your
								child are happy with your personalized book.
							</p>
						</motion.div>
					</motion.div>
				</div>
				<div className={`  overflow-hidden py-4 transition-all duration-700 `}>
					<div
						onClick={() => setShow(2 && show === 2 ? 0 : 2)}
						className="flex w-full  cursor-pointer justify-between">
						<h1 className="text-base font-bold lg:text-lg">
							2. What are the security measures in place to protect customer
							data?:
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
								At Readrly, we take customer data security seriously. We use
								industry-leading technologies to protect your data, including
								encryption and secure storage. We also have strict policies in
								place to limit access to your data. Our team is trained to
								handle customer data securely and responsibly. We employ
								frequent security reviews and audits to ensure the safety of
								customer data. We also provide customers with the ability to
								manage and delete their data upon request. We understand that
								the security of your data is important, and we take all
								necessary steps to ensure it is protected. We are committed to
								providing a secure and safe customer experience.
							</p>
						</motion.div>
					</motion.div>
				</div>
				<div className={` overflow-hidden py-4 transition-all duration-700 `}>
					<div
						onClick={() => setShow(3 && show === 3 ? 0 : 3)}
						className="flex w-full  cursor-pointer justify-between">
						<h1 className="text-base font-bold lg:text-lg">
							3. Is the website secure for entering credit card information?
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
								At Readrly, we understand the importance of keeping your
								personal and financial information secure. Thats why we use
								Paypal and Stripe, two of the most trusted and secure payment
								gateways in the world. Both of these payment options use the
								latest encryption technology to ensure your credit card
								information is kept safe and secure. So when you purchase one of
								our personalized childres books, you can rest assured that your
								credit card information is safe and secure.
							</p>
						</motion.div>
					</motion.div>
				</div>
				<div className={` overflow-hidden py-4 transition-all duration-700 `}>
					<div
						onClick={() => setShow(4 && show === 4 ? 0 : 4)}
						className="flex w-full  cursor-pointer justify-between">
						<h1 className="text-base font-bold lg:text-lg">
							4. Does the website have a satisfaction guarantee?
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
								At Readrly, we understand how important it is to create a
								personalized storybook that your children will love. That’s why
								we offer a satisfaction guarantee. If you are not completely
								satisfied with your personalized book, you can return it and get
								a full refund. We will also provide a digital copy of your book
								so you can keep a copy forever. Your satisfaction is our top
								priority, and we make sure that your personalized storybook is
								created with the utmost care and attention.
							</p>
						</motion.div>
					</motion.div>
				</div>
				<div className={` overflow-hidden py-4 transition-all duration-700 `}>
					<div
						onClick={() => setShow(5 && show === 5 ? 0 : 5)}
						className="flex w-full  cursor-pointer justify-between">
						<h1 className="text-base font-bold lg:text-lg">
							5. How is the website user-friendly and interactive?
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
								Aperback, or linen wrap books. We also provide a set of
								questions that are used to generate personalized books, allowing
								your child to feel like they’re the star of their own story. Our
								website also offers coupons to subscribe to our app at £2.99 for
								the first 3 months and a digital copy of their book. This way,
								your child can have access to their personalized book anytime,
								anywhere.
							</p>
						</motion.div>
					</motion.div>
				</div>
			</motion.div>
		</>
	);
};

export default Privacy;
