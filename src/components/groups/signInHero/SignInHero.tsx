
import Container from "../../../utils/containers/Container/Container";

function SigningInfo() {
	return (
		<Container className="bg-blur-white md:absolute hidden md:block top-0 right-0 h-screen w-1/3 text-gray-100 ml-auto">
			<Container className="flex-column">
				<Container className="resize">
			
					<h1 className="md:text-3xl lg:text-5xl">
					<span className="text-red-700 font-bold drop-shadow-2xl text-4xl">e</span>Commerce
					</h1>
				
					<p className="text-justify md:m-3 text-md lg:m-8 lg:text-lg box-border">
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
				<Container className={"bg-login h-screen md:p-28 lg:p-36"}></Container>
			</Container>
		</Container>
	);
}

export default SigningInfo;
