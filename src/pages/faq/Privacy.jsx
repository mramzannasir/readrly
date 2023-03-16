import React from "react";
import { motion } from "framer-motion";
const Privacy = () => {
	return (
		<>
			<motion.div
				className=""
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.4, opacity: 0 }}
				transition={{ type: "spring", duration: 1 }}>
				Hello i am Privacy
			</motion.div>
		</>
	);
};

export default Privacy;
