import { IInputProps } from "@/@types/form";

import { InputControl } from "../shared/style";
import WrapInput from "../shared/WrapInput";

const DatePicker = ({ error, icon, ...rest }: IInputProps) => {
	return (
		<WrapInput error={error} icon={icon}>
			<InputControl type="date" {...rest} />
		</WrapInput>
	);
};

export default DatePicker;
