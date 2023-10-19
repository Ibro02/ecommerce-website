import React from "react";
import { useAppSelector } from "../../redux/store";

function HomePage() {
const user = useAppSelector(state=>state.userReducer.user)


	return <div>Hello {user.firstName} {user.lastName}</div>;
}

export default HomePage;
