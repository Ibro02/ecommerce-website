import React, { Fragment } from "react";
import Container from "../../../utils/containers/Container/Container";

function Hero() {
	return (
		<Container className="bg-blur-white fixed top-0 right-0 h-screen w-1/3 text-gray-100">
			<Container className="flex-column">
				<Container className="m-auto">
					<h1 className="mt-5">
						<span className="text-red-700 font-bold drop-shadow-lg">e</span> Commerce
					</h1>
					<p className="text-justify m-10 text-xl">
						Welcome to <span className="text-red-700 font-bold">e</span>
						commerce shop Discover a world of endless possibilities right at
						your fingertips. We're delighted to have you here at{" "}
						<span className="text-red-700 font-bold">e</span>commerce
						shop, your go-to destination for all things extraordinary. At{" "}
						<span className="text-red-700 font-bold">e</span>commerce
						shop, we believe in the art of seamless shopping. Our commitment to
						quality, convenience, and exceptional customer service ensures that
						your online shopping experience is nothing short of perfect.{" "}
					</p>
				</Container>
				<Container className={" h-screen bg-login"}></Container>
			</Container>
		</Container>
	);
}

export default Hero;
