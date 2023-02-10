/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Navbar.css";
export const Navbar = () => {
	return (
		<div>
			<div>
				<p style={{ position: "absolute", padding: "18px 214px" }}>
					<img
						src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2F4Tb%2F6xz%2F4Tb6xz5jc.png&f=1&nofb=1&ipt=db21010e806a2857d6c938b1926a359645d0da0f06a1ea18b963bc2d2c99c85c&ipo=images"
						height="30px"
						width="30px"
						alt=""
					/>
				</p>
				<p style={{ position: "absolute", padding: "20px 250px" }}>earthly</p>
			</div>
			<div className="nav-box">
				<div className="nav-items">
					<p>Home</p>
				</div>
				<div className="nav-items">
					<p> Shop</p>
				</div>
				<object
					data="\images\lines.svg"
					alt=""
					title="obj"
					height="300px"
					width="300px"
					style={{ position: "absolute", paddingRight: "10px", zIndex: "-222" }}
				></object>
				<object
					data="\images\line2.svg"
					alt=""
					height="300px"
					width="300px"
					style={{
						position: "absolute",
						paddingTop: "300px",
						paddingRight: "900px",
						float: "right",
						zIndex: "-222",
					}}
				></object>
			</div>
		</div>
	);
};
