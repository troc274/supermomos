import { IInputProps } from "@/@types/form";

import { InputControl } from "../shared/style";
import WrapInput from "../shared/WrapInput";

const TextField = ({ label, error, icon, ...rest }: IInputProps) => {
	return (
		<WrapInput error={error} icon={icon} label={label}>
			<InputControl type="text" {...rest} />
		</WrapInput>
	);
};

export default TextField;
