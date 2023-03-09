import { ICheckBoxProps } from "@/@types/form";

import WrapInput from "../shared/WrapInput";

import * as S from "./style";

const CheckBox = ({ id, error, label, ...rest }: ICheckBoxProps) => {
	return (
		<WrapInput error={error}>
			<S.WrapCheckBox>
				<S.CheckBox htmlFor={id}>
					<S.CheckBoxInput id={id} type="checkbox" {...rest} />
					<S.CheckMark />
				</S.CheckBox>
				<S.CheckBoxLabel htmlFor={id}>{label}</S.CheckBoxLabel>
			</S.WrapCheckBox>
		</WrapInput>
	);
};

export default CheckBox;
