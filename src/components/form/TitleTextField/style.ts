import styled from "styled-components";

export const TitleTextFieldInput = styled.div`
	color: ${({ theme }) => theme.colors.white};
	font-size: 48px;
	line-height: 60px;
	font-weight: 700;
	max-width: 100%;
	display: inline-block;

	span {
		padding: 4px 12px;
		background: ${({ theme }) => theme.colors.purple};
		
		&[contenteditable] {
			outline: 0px solid transparent;
		}
	}
`;
