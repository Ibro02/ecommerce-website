import { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import UserService from "../../api/services/Users";
import { getUserInfo } from "../../redux/slices/userSlice";
import Navbar from "../../components/groups/navbar/Navbar";
import { Outlet } from "react-router-dom";

function HomePage() {
	const user = useAppSelector((state) => state.userReducer.user);
	const dispatch = useAppDispatch();

	const getData = async () => {
		let log = await UserService.getUser(
			localStorage.loggedUsername,
			localStorage.loggedPassword
		);
		dispatch(getUserInfo(log.data));
	};

	useEffect(() => {
		const fetchData = async () => {
			console.log("Fetching data...");
			await getData();
		};
		fetchData();
	}, []);
	return (
		<Fragment>
			<Navbar />
			<div className="bg-svg"></div>
			<Outlet />

		</Fragment>
	);
}

export default HomePage;
