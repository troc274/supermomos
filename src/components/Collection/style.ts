import styled, { DefaultTheme } from "styled-components";

export const WrapImage = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	margin: 0 -8px;
	width: 900px;
`;

export const ImageItem = styled.div`
	flex: 0 0 calc(100% / 6);
	width: calc(100% / 6);
	padding: 0 8px;
	margin-bottom: 16px;
`;

export const ImageRatio = styled.div`
	position: relative;
	padding-top: 62.4%;
	background-color: #d0d5dd;
	transition: 300ms ease;
	cursor: pointer;
	${({ active, theme }: { active: boolean; theme: DefaultTheme }) =>
		active &&
		`transform: scale(1.1); box-shadow: 0 0 0 2px ${theme.colors.purple};`}

	&:hover {
		transform: scale(1.1);
	}
`;

export const Image = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	object-fit: cover;
`;

export const AddBanner = styled.div`
	position: relative;
	padding-top: 60.2165%;
	background: rgba(242, 242, 242, 0.1);
	border: 1px dashed #f2f2f2;
	border-radius: 0px 64px;
	cursor: pointer;
`;

export const Banner = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	object-fit: cover;
	border-radius: 0px 64px;
	cursor: pointer;
`;

export const EmptyBanner = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 20px;
	color: #14597a;
	display: flex;
	align-items: center;

	svg {
		width: 24px;
		margin-right: 16px;
	}
`;

export const ErrorMessage = styled.div`
	position: absolute;
	left: 50%;
	top: calc(100% + 8px);
	font-size: 18px;
	color: ${({ theme }) => theme.colors.red};
	transform: translateX(-50%);
`;
