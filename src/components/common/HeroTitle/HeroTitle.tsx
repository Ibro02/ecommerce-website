import React from "react";

function HeroTitle({ children }: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className="flex flex-col items-center justify-center h-screen font-geologica ">
			<h1 className="flex-col text-white text-7xl drop-shadow-2xl shadow-black uppercase m-auto flex -z-0">
				{children}
				<h2 className="text-sm font-extralight font-['Open Sans'] text-slate-200">
					Discover a World of Unbeatable Deals
				</h2>
			</h1>
		</div>
	);
}

export default HeroTitle;
