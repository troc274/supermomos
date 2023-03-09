import styled from "styled-components";

export const Form = styled.form`
	margin: 96px 0;
`;

export const Item = styled.div`
	flex: 0 0 ${({ percent }: { percent: number }) => percent}%;
	max-width: ${({ percent }: { percent: number }) => percent}%;
	padding: 0 12px;
`;

export const WrapItem = styled.div`
	display: flex;
	align-items: center;
	margin: 0 -12px;
	flex-wrap: wrap;
`;

export const Heading = styled.div`
	color: ${({ theme }) => theme.colors.purple};
	margin-bottom: 24px;
	background: ${({ theme }) => theme.colors.yellow};
	font-size: 32px;
	line-height: 60px;
	padding: 0 12px;
	display: inline-block;
	font-weight: bold;
`;
