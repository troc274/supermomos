import styled from "styled-components";

export const TextAreaInputControl = styled.textarea`
	border-radius: 8px;
	width: 100%;
	height: 207px;
	font-size: 16px;
	padding: 12px 14px;
	border: none;
    box-shadow: none;

	&:focus,
	&:active {
        outline: none;
		box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
			rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
	}
`;
