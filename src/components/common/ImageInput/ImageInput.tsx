import { useEffect, useId, useState } from "react";
import Container from "../../../utils/containers/Container/Container";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { addImage } from "../../../redux/slices/imageSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons/faImage";

function ImageInput() {
	const inputId = useId();
	const [images, setImage] = useState<string[]>([]);
	const imagesUrl = useAppSelector((images) => images.imageReduces.imageUrl);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (images.length === 0) dispatch(addImage([]));
		dispatch(addImage(images));
	}, [images, imagesUrl]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const target = e.target as EventTarget & HTMLInputElement;
		const file = new FileReader();
		console.log(target?.files && target?.files[0]);
		file.onloadend = () => {
			if (file.result !== null) setImage([...images, file.result.toString()]);
		};
		try {
			if (target?.files && target.files[0].size < 1000000) {
				file.readAsDataURL(target?.files[0]);
			} else throw Error("Maximum size of file is 1MB!");
		} catch (error) {
			alert(error);
		}
	};
	return (
		<Container className=" relative border-2 mt-10 border-dashed border-red-300">
			<Container className="grid absolute grid-cols-3 gap-2">
				{images.map((image, key) => (
					<Container className=" -z-0">
						<h3
							className="text-red-500 bg-white outline-black outline-2 rounded-full text-sm  font-bold drop-shadow-2xl cursor-pointer absolute z-10 "
							onClick={() => {
								setImage([
									...images.filter((img) => {
										return img !== image;
									}),
								]);
							}}
						>
							X
						</h3>
						<Container>
							<img
								className="w-48 h-12 -z-0"
								key={key}
								alt="preview image"
								src={image}
							/>
						</Container>
					</Container>
				))}
			</Container>
			<form className="flex flex-col p-20 z-10 flex-wrap">
				<Container className="m-auto z-20">
					<label
						htmlFor={inputId}
						className="underline flex flex-wrap justify-center align-middle text-red-600 cursor-pointer hover:text-red-100 transition-all duration-200"
					>
						<FontAwesomeIcon className="text-2xl" icon={faImage} />
						Add images
					</label>
				</Container>
				<input
					id={inputId}
					accept="image/*"
					className="text-slate-100 m-auto"
					name="image_upload"
					type="file"
					onChange={(e) => {
						handleChange(e);
					}}
				/>
			</form>
		</Container>
	);
}

export default ImageInput;
