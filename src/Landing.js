import React, { useState } from "react";
import "./Landing.css";
import { motion } from "framer-motion";

export const Landing = () => {
	const [rotate, setRotate] = useState(false);
	return (
		<motion.div
			drag
			drag="x"
			dragConstraints={{ left: 50, right: 0 }}
			className="box"
		>
			<motion.div
				animate={{ x: "10px" }}
				whileHover={{ scale: 1.05 }}
				className="inner-box"
				style={{ paddingLeft: "150px", paddingTop: "5px" }}
			>
				<h1>earthly</h1>
				<h3 style={{ padding: "-20px 0px 0px 0px", fontWeight: 100 }}>
					<span style={{ color: "#eb774d", fontWeight: 300 }}>sustainable</span>
					-tech{" "}
				</h3>
				<p style={{ maxWidth: "350px" }}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book.
				</p>
			</motion.div>
			<motion.div className="inner-box" whileHover={{ scale: 1.05 }}>
				<motion.object
					drag
					dragConstraints={{ left: 100 }}
					animate={{ x: [0, 100, 0] }}
					transition={{ duration: 8, repeat: Infinity }}
					onClick={() => {
						setRotate(!rotate);
					}}
					data="\images\woman.svg"
					alt=""
					height="300px"
					width="300px"
					style={{
						borderRadius: "20%",
						paddingRight: "150px",
						backgroundColor: "#2c645b",
					}}
				></motion.object>
			</motion.div>
		</motion.div>
	);
};
