import { useState } from "react";
import Picture from "../icon/Picture";
import Popup from "../Popup";
import {
	AddBanner,
	Banner,
	EmptyBanner,
	ErrorMessage,
	Image,
	ImageItem,
	ImageRatio,
	WrapImage,
} from "./style";

type ICollectionProps = {
	images: string[];
	onChange: (image: string) => void;
	value: string;
	error: string;
};

const Collection = ({ images, onChange, value, error }: ICollectionProps) => {
	const [showPopup, setShowPopup] = useState(false);
	const [pickedImage, setPickedImage] = useState(value);

	const onClose = () => {
		setShowPopup(false);
	};

	const onSubmit = () => {
		setShowPopup(false);
		onChange(pickedImage);
	};

	return (
		<>
			<AddBanner onClick={() => setShowPopup(true)}>
				{value ? (
					<Banner src={value} />
				) : (
					<EmptyBanner>
						<Picture />
						Add a banner
					</EmptyBanner>
				)}

				{error && <ErrorMessage>{error}</ErrorMessage>}
			</AddBanner>
			<Popup
				title="Choose a banner"
				show={showPopup}
				onClose={onClose}
				onSubmit={onSubmit}
			>
				<WrapImage>
					{images.map((image, index) => (
						<ImageItem key={image + index}>
							<ImageRatio
								onClick={() => setPickedImage(image)}
								active={pickedImage === image}
							>
								<Image src={image} alt={image} />
							</ImageRatio>
						</ImageItem>
					))}
				</WrapImage>
			</Popup>
		</>
	);
};

export default Collection;
