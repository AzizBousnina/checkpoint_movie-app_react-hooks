import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { moviesData } from "../Data";
import './Description.css'
const Description = () => {
	const [des, setDes] = useState({});
	const { id } = useParams();
	useEffect(() => {
		const movieD = moviesData.find((el) => el.id == id);
		setDes(movieD);
	}, [id]);
	return (
		<div>
		
			<h1>{des.description}</h1>
		</div>
	);
};

export default Description;
