import styled from "styled-components";

export const WrapMessage = styled.div`
	width: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
    flex-direction: column;
    padding: 32px;

	svg {
		margin-bottom: 32px;
	}
`;

export const TitleMessage = styled.div`
	font-weight: bold;
	font-size: 32px;
	text-align: center;
    margin-bottom: 32px;
`;

export const Button = styled.div`
	cursor: pointer;
	font-weight: bold;
	padding: 8px 16px;
	color: ${({ theme }) => theme.colors.purple};
	background-color: ${({ theme }) => theme.colors.yellow};
	display: flex;
	align-items: center;
	border-radius: 8px;

	&:hover {
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
	}
`;
