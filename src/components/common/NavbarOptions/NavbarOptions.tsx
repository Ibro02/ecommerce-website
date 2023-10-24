import { Link } from "react-router-dom";
import { NavbarRoutes } from "../../../constants/Mock";

export default function NavbarOptions() {
	return (
		<ul className="flex gap-10 my-auto mx-5">
			{NavbarRoutes.map((route, key) => {
				if (route.name !== "Profile")
					return (
						<li id={`${key}`}>
							<Link
								to={route.path}
								className="text-slate-600 hover:text-red-500 transition-all"
							>
								{route.name}
							</Link>
						</li>
					);
				else
					return (
						<>
            {/*#TODO -> make drop down menu at profile button */}
							<Link
								to={route.path}
								className="text-slate-600 hover:text-red-500 transition-all"
								onClick={() => window.localStorage.removeItem("token")}
							>
								{route.name}
							</Link>
						</>
					);
			})}
		</ul>
	);
}
