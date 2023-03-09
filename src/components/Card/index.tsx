import { ReactNode } from "react";
import styled from "styled-components";

const WrapCard = styled.div`
	background: #ffffff;
	box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	padding: 32px;
	margin-bottom: 32px;
`;

type ICardProps = {
	children: ReactNode;
};

const Card = ({ children }: ICardProps) => {
	return <WrapCard>{children}</WrapCard>;
};

export default Card;
