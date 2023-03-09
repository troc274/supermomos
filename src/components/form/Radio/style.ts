import styled from "styled-components";

export const GroupInput = styled.div`
	display: flex;
	align-items: center;
`;

export const WrapRadio = styled.div`
	display: flex;
	align-items: center;
	margin-right: 32px;
`;

export const RadioLabel = styled.label`
	margin-left: 12px;
	font-size: 14px;
	cursor: pointer;
`;

export const Radio = styled.label`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	position: relative;
	cursor: pointer;
`;

export const CheckMark = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	border: 1px solid #d0d5dd;
`;

export const RadioInput = styled.input`
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
				top: 50%;
				left: 50%;
				display: inline-block;
				transform: translate(-50%, -50%);
				height: 10px;
				width: 10px;
				background: ${({ theme }) => theme.colors.purple};
                border-radius: 50%;
			}
		}
	}
`;
