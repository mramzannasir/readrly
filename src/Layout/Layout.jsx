import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Layout = () => {
	return (
		<>
			{/*  Navbar*/}
			<div className="wrapper bg-purple">
				<div className="contain">
					<Navbar />
				</div>
			</div>

			{/* Footer */}
			<div className="wrapper mt-[40rem] ">
				<Footer />
			</div>
		</>
	);
};

export default Layout;
