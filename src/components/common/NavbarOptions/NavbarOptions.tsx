import { Link, NavLink } from "react-router-dom";
import { NavbarRoutes } from "../../../constants/Mock";

export default function NavbarOptions() {
	const token = localStorage.token;
	return (
		<ul className="flex gap-10 my-auto mx-5 text-lg">
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
						<li id={`${key}`} className="group block">
							<NavLink className="group text-slate-600 hover:text-red-500 transition-all">
								{route.name}
								<span className="text-sm">▼</span>
							</NavLink>

							<ul
								className={`absolute shadow-sm z-0 text-lg text-justify p-2 pt-6 pr-0 bg-slate-100 w-40 right-0 hidden group-hover:block `}
							>
								<li>
									<NavLink
										to={route.path}
										className="text-slate-600 hover:text-red-500 transition-all"
									>
										Your profile
									</NavLink>
								</li>
								<li>
									<NavLink
										to={"/"}
										className="text-slate-600 hover:text-red-500 transition-all"
										onClick={() => window.localStorage.clear()}
									>
										Sign out
									</NavLink>
								</li>
							</ul>
						</li>
					);
			})}
		</ul>
	);
}
