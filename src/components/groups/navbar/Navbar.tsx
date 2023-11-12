import Container from "../../../utils/containers/Container/Container";
import Flex from "../../../utils/containers/Flex/Flex";
import NavbarOptions from "../../common/NavbarOptions/NavbarOptions";
import navbarlogo from "../../../assets/navbarlogo.svg";
import NavbarHeader from "../NavbarHeader/NavbarHeader";

function Navbar() {
	return (
		<>
			<Container className="fixed top-0 right-0 left-0 h-max w-full bg-slate-100 shadow-2xl transition-all duration-200 z-40">
				<NavbarHeader />
				<Container className="flex h-20 justify-between z-10">
					<Container className="h-fit w-1/6 my-auto mx-5">
						<img src={navbarlogo} />
					</Container>
					<Flex>
						<NavbarOptions />
					</Flex>
				</Container>
			</Container>
		</>
	);
}

export default Navbar;
