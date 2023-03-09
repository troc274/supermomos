import styled from "styled-components";

export const GroupInput = styled.div`
	margin-bottom: 24px;
`;

export const WrapInput = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	svg {
		width: 24px;
		margin-right: 8px;
	}
`;

export const WrapInputContent = styled.div`
    position: relative;
    width: 100%;
`

export const Label = styled.div`
	margin-bottom: 8px;
	display: block;
`;

export const SubLabel = styled.div`
	margin-bottom: 16px;
	display: block;
    font-weight: 400;
    font-size: 14px;
`;

export const ErrorMessage = styled.div`
	position: absolute;
	color: ${({ theme }) => theme.colors.red};
	top: calc(100% + 4px);
	left: 0;
	font-size: 14px;

	&.fadeInDown-enter {
		opacity: 0;
		transform: translateY(-10px);
	}

	&.fadeInDown-enter-active {
		opacity: 1;
		transform: translateY(0);
		transition: opacity 0.3s, transform 0.4s;
	}

	&.fadeInDown-exit {
		opacity: 1;
		transform: translateY(0);
		transition: opacity 0.3s, transform 0.4s;
	}

	&.fadeInDown-exit-active {
		opacity: 0;
		transform: translateY(-10px);
		transition: opacity 0.3s, transform 0.4s;
	}

	&.fadeInDown-exit-done {
		opacity: 0;
		display: none;
	}
`;
