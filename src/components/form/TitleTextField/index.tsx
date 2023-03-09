import { ChangeEvent, useEffect, useRef } from "react";

import WrapInput from "../shared/WrapInput";

import { TitleTextFieldInput } from "./style";

type IProps = {
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	error?: string;
	value?: any;
};

const TitleTextField = ({ onChange, error, value }: IProps) => {
	const timer = useRef<ReturnType<typeof setTimeout>>();
	const inputRef = useRef<HTMLDivElement>(null);

	// set value for parent
	const onInput = (e: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			// Set parent value when user stopped input text
			timer && clearTimeout(timer.current);
			timer.current = setTimeout(() => {
				onChange?.(e);
			}, 300);
		}
	};

	useEffect(() => {
		// set default value
		if (value && inputRef.current) {
			inputRef.current.innerText = value;
		}
	}, []);

	return (
		<WrapInput error={error}>
			<TitleTextFieldInput>
				<span
					contentEditable={true}
					onInput={onInput}
					suppressContentEditableWarning={true}
					ref={inputRef}
				/>
			</TitleTextFieldInput>
		</WrapInput>
	);
};

export default TitleTextField;
