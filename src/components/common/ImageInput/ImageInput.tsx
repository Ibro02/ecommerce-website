import { useEffect, useId, useState } from "react";
import Container from "../../../utils/containers/Container/Container";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { addImage } from "../../../redux/slices/imageSlice";

function ImageInput() {
	const inputId = useId();
	const [images, setImage] = useState<string[]>([]);
	const imagesUrl = useAppSelector((images) => images.imageReduces.imageUrl);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (images.length === 0)
		dispatch(addImage([]))
		dispatch(addImage(images));
		//console.log(imagesUrl);
	}, [images, imagesUrl]);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const target = e.target as EventTarget & HTMLInputElement;
		const file = new FileReader();
		console.log(target?.files && target?.files[0]);
		file.onloadend = () => {
			//	ProductService.addImage({ id: 0, image: `${file.result}`, productId: 1 });
			if (file.result !== null) setImage([...images, file.result.toString()]);
			//	console.log(file.result);
		};
		try {
			if (target?.files && target.files[0].size < 1000000) {
				file.readAsDataURL(target?.files[0]);
				//	console.log(images);
			} else throw Error("Maximum size of file is 1MB!");
		} catch (error) {
			alert(error);
		}
	};
	return (
		<Container>
			<form className="flex flex-col mt-10 z-0 flex-wrap">
				<Container>
					<label htmlFor={inputId} className="button-24">
						Add images
					</label>
					{/* <label
						className="button-24"
						onClick={() =>
							setImage([
								...images.filter((image) => {
									return image !== images.pop();
								}),
							])
						}
					>
						Remove last one
					</label> */}
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
			<Container className="grid grid-cols-3 gap-4">
				{images.map((image, key) => (
					<Container>
						<h4
							className="text-red-500 absolute bg-red-100 rounded-sm"
							onClick={() => {
								setImage([
									...images.filter((img) => {
										return img !== image;
									}),
								]);
							}}
						>
							X
						</h4>
						<img
							className="w-48 h-20"
							key={key}
							alt="preview image"
							src={image}
						/>
					</Container>
				))}
			</Container>
		</Container>
	);
}

export default ImageInput;
