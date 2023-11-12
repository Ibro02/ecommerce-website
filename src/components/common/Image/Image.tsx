import React from "react";

function Image({ src }: { src: string }) {
	return (
		<div className="flex justify-normal align-middle bg-white m-auto h-52 w-full">
			<img src={src} className=" w-full h-auto  object-contain" />
		</div>
	);
}

export default Image;
