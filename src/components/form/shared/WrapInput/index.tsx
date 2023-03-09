import { ReactNode, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import * as S from "./style";

type IProps = {
	children: ReactNode;
	error?: string;
	icon?: ReactNode;
	label?: ReactNode | string;
	subLabel?: ReactNode | string;
};

const WrapInput = ({ children, error, icon, label, subLabel }: IProps) => {
	const errorRef = useRef(null);

	return (
		<S.GroupInput>
			{label && <S.Label>{label}</S.Label>}
			{subLabel && <S.SubLabel>{subLabel}</S.SubLabel>}
			<S.WrapInput>
				{icon}

				<S.WrapInputContent>
					{children}

					<CSSTransition
						in={!!error}
						classNames="fadeInDown"
						timeout={300}
						nodeRef={errorRef}
						appear
					>
						<S.ErrorMessage ref={errorRef}>{error}</S.ErrorMessage>
					</CSSTransition>
				</S.WrapInputContent>
			</S.WrapInput>
		</S.GroupInput>
	);
};

export default WrapInput;
