import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import UserService from "../../api/services/Users";
import { getUserInfo } from "../../redux/slices/userSlice";
function HomePage() {
	const dispatch = useAppDispatch();
	const getData = async () => {
		const loggedUser = await UserService.getUserWithToken();
		dispatch(getUserInfo(loggedUser.data));
	};
	useEffect(() => {
		getData();
	});

	const user = useAppSelector((state) => state.userReducer.user);

	return (
		<div>
			Hello {user.firstName} {user.lastName}
		</div>
	);
}

export default HomePage;
