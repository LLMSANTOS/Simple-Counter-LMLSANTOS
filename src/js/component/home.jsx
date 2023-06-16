import React from "react";
import Timer from "./timer.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Timer 
				seconds={9800}/>	
		</div>
	);
};

export default Home;
