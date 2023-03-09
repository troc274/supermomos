import styled from "styled-components";

export const ListTag = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;

export const Tag = styled.div`
	font-size: 14px;
	line-height: 20px;
	padding: 2px 10px;
	background: #f2f4f7;
	border-radius: 50px;
	cursor: pointer;
	margin-right: 8px;
	transition: 300ms ease;

	&:hover {
		background: ${({ theme }) => theme.colors.purple};
		color: ${({ theme }) => theme.colors.white};
	}
`;

export const ListTagPicked = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	min-height: 28px;
	margin-bottom: 8px;
	/* margin-top: 24px; */
`;

export const TagPicked = styled.div`
	font-size: 14px;
	line-height: 20px;
	padding: 4px 26px 4px 12px;
	background: #f2f4f7;
	border-radius: 50px;
	color: ${({ theme }) => theme.colors.purple};
	background: #f9f5ff;
	position: relative;
	margin-right: 8px;

	svg {
		position: absolute;
		top: 50%;
		right: 8px;
		transform: translateY(-50%);
		cursor: pointer;
		width: 12px;
		height: 12px;
		margin: 0;
	}
`;