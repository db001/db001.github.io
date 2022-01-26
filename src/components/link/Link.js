import React from "react";
import "./Link.css";

const Link = ({ data }) => {
	return (
		<a href={data.link} id={data.id}>
			<img src={data.icon} alt="" />
		</a>
	);
};

export default Link;
