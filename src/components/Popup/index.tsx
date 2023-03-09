import { ReactNode } from "react";
import {
	PopupBody,
	PopupButton,
	PopupButtonSecondary,
	PopupCard,
	PopupFooter,
	PopupHeader,
	WrapPopup,
} from "./style";

type IPopupProps = {
	show: any;
	children: ReactNode;
	title: string;
	onClose: () => void;
	onSubmit: () => void;
};

const Popup = ({ show, children, title, onClose, onSubmit }: IPopupProps) => {
	return (
		show && (
			<WrapPopup>
				<PopupCard>
					<PopupHeader>{title}</PopupHeader>
					<PopupBody>{children}</PopupBody>
					<PopupFooter>
						<PopupButtonSecondary onClick={onClose}>Close</PopupButtonSecondary>
						<PopupButton onClick={onSubmit}>Save</PopupButton>
					</PopupFooter>
				</PopupCard>
			</WrapPopup>
		)
	);
};

export default Popup;
