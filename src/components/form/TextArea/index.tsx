import { ITextAreaProps } from "@/@types/form";

import WrapInput from "../shared/WrapInput";

import { TextAreaInputControl } from "./style";

const TextArea = ({ error, label, ...rest }: ITextAreaProps) => {
	return (
		<WrapInput error={error} label={label}>
			<TextAreaInputControl {...rest} />
		</WrapInput>
	);
};

export default TextArea;
