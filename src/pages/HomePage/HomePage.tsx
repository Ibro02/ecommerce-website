import React from "react";

function HomePage({ user }: any) {
	return <div>Hello {user?.username}</div>;
}

export default HomePage;
