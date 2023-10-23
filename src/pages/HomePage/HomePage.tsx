// import React, { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../redux/store";
// import UserService from "../../api/services/Users";
// import { getUserInfo } from "../../redux/slices/userSlice";
// function HomePage() {
// 	const dispatch = useAppDispatch();
// 	const getData = async () => {
// 		const loggedUser = await UserService.getUserWithToken();
// 		dispatch(getUserInfo(loggedUser.data));
// 	};
// 	useEffect(() => {
// 		getData();
// 	});
// 	const user = useAppSelector((state) => state.userReducer.user);

// 	return (
// 		<div>
// 			Hello {user.firstName} {user.lastName}
// 		</div>
// 	);
// }

// export default HomePage;
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import UserService from "../../api/services/Users";
import { getUserInfo } from "../../redux/slices/userSlice";

function HomePage() {
	const user = useAppSelector((state) => state.userReducer.user);
	const dispatch = useAppDispatch();
  
	const getData = async () => {
		let log = await UserService.getUser(localStorage.loggedUsername, localStorage.loggedPassword);
      	dispatch(getUserInfo(log.data));
	}
	
	useEffect(() => {
		// Define an async function and call it inside the useEffect
		const fetchData = async () => {
		console.log("Fetching data...");
		await getData();

		
	  };fetchData();},[])
	return (
		<div>
			Hello {user.firstName} {user.lastName}
		</div>
	);
}

export default HomePage;
