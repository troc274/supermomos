import styled from "styled-components";

export const WrapCheckBox = styled.div`
	display: flex;
	align-items: center;
`;

export const CheckBoxLabel = styled.label`
	margin-left: 12px;
	font-size: 14px;
	cursor: pointer;
`;

export const CheckBox = styled.label`
	width: 20px;
	height: 20px;
	border-radius: 6px;
	position: relative;
	cursor: pointer;
`;

export const CheckMark = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 6px;
	border: 1px solid #d0d5dd;
`;

export const CheckBoxInput = styled.input`
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	visibility: hidden;

	&:checked {
		~ ${CheckMark} {
			background: #F9F5FF;

			&:after {
				content: "";
				position: absolute;
				top: 8px;
				left: 4px;
				display: inline-block;
				transform: rotate(45deg) translate(-50%, -50%);
				height: 10px;
				width: 4px;
				border-bottom: 2px solid ${({ theme }) => theme.colors.purple};
				border-right: 2px solid ${({ theme }) => theme.colors.purple};
			}
		}
	}
`;
