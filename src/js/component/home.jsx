import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
let first = Math.floor(props.counter / 1) % 10;
let second = Math.floor(props.counter / 10) % 10;
let third = Math.floor(props.counter / 100) % 10;
let fourth = Math.floor(props.counter / 1000) % 10;
let fifth = Math.floor(props.counter / 10000) % 10;
let sixth = Math.floor(props.counter / 100000) % 10;


	return (
		<div  className="text-center d-flex justify-content-center" >
			<div className="rounded bg-black text-white me-2 d-flex justify-content-center align-items-center" style={{width:"7rem", height:"9rem", fontSize:"5rem"}}>
                <FontAwesomeIcon icon={faClock} />
            </div>
			<div className="rounded bg-black text-white me-2" style={{width:"7rem", height:"9rem", fontSize:"5rem"}}>
				{sixth}
			</div>
			<div className="rounded bg-black text-white me-2" style={{width:"7rem", height:"9rem", fontSize:"5rem"}}>
				{fifth}
			</div>
			<div className="rounded bg-black text-white me-2" style={{width:"7rem", height:"9rem", fontSize:"5rem"}}>
				{fourth}
			</div>
			<div className="rounded bg-black text-white me-2" style={{width:"7rem", height:"9rem", fontSize:"5rem"}}>
				{third}
			</div>
			<div className="rounded bg-black text-white me-2" style={{width:"7rem", height:"9rem", fontSize:"5rem"}}>
				{second}
			</div>
			<div className="rounded bg-black text-white me-2" style={{width:"7rem", height:"9rem", fontSize:"5rem"}}>
				{first}
			</div>
		</div>
	);
};

export default Home;
