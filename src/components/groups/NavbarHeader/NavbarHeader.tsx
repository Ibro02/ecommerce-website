import Container from "../../../utils/containers/Container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../redux/store";
function NavbarHeader() {
	const user = useAppSelector((state) => state.userReducer.user);
	const [isSearchOn, setSearchOn] = useState<boolean>(false);
	useEffect(() => {
		setTimeout(() => {
			document.getElementById("searchInput")?.classList.toggle("w-72");
		}, 30);
	}, [isSearchOn]);
	return (
		<Container className="bg-red-800 flex justify-between p-1 h-max transition-all duration-200">
			<Container className="relative transition-all duration-300 h-10">
				<FontAwesomeIcon
					className={`absolute z-10  text-2xl m-2 ${
						!isSearchOn && "text-white"
					}`}
					icon={faMagnifyingGlass}
					onClick={() => setSearchOn(!isSearchOn)}
				/>
				{!isSearchOn && (
					<h4
						className="absolute text-slate-200 font-thin mx-8 my-2"
						onClick={() => setSearchOn(true)}
					>
						Search
					</h4>
				)}
				{isSearchOn && (
					<input
						id={"searchInput"}
						placeholder="Search..."
						className={`left-0 w-0 h-10 pl-10 transition-width duration-500 ease-in-out rounded-full`}
					/>
				)}
			</Container>

			<h4 className={"text-slate-200 font-thin my-auto"}>
				Welcome
				<span className="mx-2 underline">
					<FontAwesomeIcon className="mr-1" icon={faUser} />
					{user.firstName} {user.lastName}
				</span>
			</h4>
		</Container>
	);
}

export default NavbarHeader;
