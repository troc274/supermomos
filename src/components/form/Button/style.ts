import styled from "styled-components";

export const Button = styled.button`
	width: 100%;
	height: 48px;
	color: ${({ theme }) => theme.colors.purple};
	background: ${({ theme }) => theme.colors.yellow};
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
	border-radius: 8px;
`;
