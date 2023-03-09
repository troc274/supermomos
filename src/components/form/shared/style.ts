import styled from "styled-components";

export const InputControl = styled.input`
	border-radius: 4px;
	width: 100%;
	height: 40px;
	font-size: 16px;
	padding: 0 12px;

	&:focus,
	&:active {
		box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
			rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
	}

	/* &[type="time"]::-webkit-calendar-picker-indicator {
		background: none;
	} */
`;
