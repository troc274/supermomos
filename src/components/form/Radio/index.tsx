import { IRadioProps } from "@/@types/form";

import WrapInput from "../shared/WrapInput";

import * as S from "./style";

const Radio = ({ id, error, label, options, value, ...rest }: IRadioProps) => {
	return (
		<WrapInput error={error} label={label}>
			<S.GroupInput>
				{options.map((option, index) => (
					<S.WrapRadio key={`${id}-${index}`}>
						<S.Radio htmlFor={`${id}-${index}`}>
							<S.RadioInput
								id={`${id}-${index}`}
								type="radio"
                                value={option.value}
								checked={value === option.value}
								{...rest}
							/>
							<S.CheckMark />
						</S.Radio>
						<S.RadioLabel htmlFor={`${id}-${index}`}>
							{option.label}
						</S.RadioLabel>
					</S.WrapRadio>
				))}
			</S.GroupInput>
		</WrapInput>
	);
};

export default Radio;
