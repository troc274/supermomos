import Fail from "@/components/icon/Fail";
import Success from "@/components/icon/Success";
import { PopupCard, WrapPopup } from "@/components/Popup/style";
import Button from "../Button";
import { TitleMessage, WrapMessage } from "./style";

type IPopupMessage = {
	status: boolean;
	message: string;
	onClose: () => void;
};

const PopupMessage = ({ status, message, onClose }: IPopupMessage) => {
	return (
		<WrapPopup>
			<PopupCard>
				<WrapMessage>
					{status ? <Success /> : <Fail />}
					<TitleMessage>{message}</TitleMessage>
					<Button onClick={onClose}>Close</Button>
				</WrapMessage>
			</PopupCard>
		</WrapPopup>
	);
};

export default PopupMessage;
