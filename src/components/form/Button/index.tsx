import { ButtonHTMLAttributes, ReactNode } from "react";

import * as S from "./style";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

const Button = ({ children, ...rest }: IButtonProps) => {
	return <S.Button {...rest}>{children}</S.Button>;
};

export default Button;
