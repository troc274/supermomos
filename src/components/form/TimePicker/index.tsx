import { IInputProps } from "@/@types/form";

import { InputControl } from "../shared/style";
import WrapInput from "../shared/WrapInput";


const TimePicker = ({ label, error, icon, ...rest }: IInputProps) => {
	return (
		<WrapInput error={error} icon={icon} label={label}>
			<InputControl type="time" {...rest} />
		</WrapInput>
	);
};

export default TimePicker;
