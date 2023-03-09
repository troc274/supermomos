import styled from "styled-components";

export const WrapPopup = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
`;

export const PopupCard = styled.div`
	border-radius: 16px;
	background: #ffffff;
`;

export const PopupHeader = styled.div`
	font-size: 32px;
	padding: 24px;
	position: relative;
	border-bottom: 1px solid #d0d5dd;
    font-weight: bold;

	svg {
		position: absolute;
		right: 24px;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
		width: 24px;
		height: 24px;
	}
`;

export const PopupBody = styled.div`
	padding: 24px;
`;

export const PopupFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 24px;
	border-top: 1px solid #d0d5dd;
`;

export const PopupButton = styled.div`
	cursor: pointer;
	font-weight: bold;
	padding: 8px 16px;
	color: ${({ theme }) => theme.colors.purple};
	background-color: ${({ theme }) => theme.colors.yellow};
	display: flex;
	align-items: center;
	border-radius: 8px;
	margin-left: 16px;

	&:hover {
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
	}
`;

export const PopupButtonSecondary = styled.div`
	cursor: pointer;
	font-weight: bold;
	padding: 8px 16px;
	color: ${({ theme }) => theme.colors.gray};
	display: flex;
	align-items: center;
	border-radius: 8px;

	&:hover {
		box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
	}
`;
