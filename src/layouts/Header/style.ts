import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 80px;
	position: relative;
	z-index: 1;
`;

export const Logo = styled.img`
	width: 200px;
`;

export const Nav = styled.div`
	display: flex;
	align-items: center;
	margin: 0;
`;

export const NavItem = styled.div`
	list-style: none;
	padding-left: 48px;
	display: flex;
	align-items: center;
`;

export const NavLink = styled.div`
	color: ${({ theme }) => theme.colors.gray};
	transition: 300ms ease;

	&:hover {
		color: ${({ theme }) => theme.colors.purple};
	}
`;

export const MenuDropDown = styled.div`
	margin: 0;
	position: absolute;
	top: 100%;
	right: 0;
	padding-top: 16px;
	display: none;
`;

export const MenuDropDownItem = styled.div`
	list-style: none;
	background-color: ${({ theme }) => theme.colors.yellow};

	${NavLink} {
		white-space: nowrap;
		padding: 16px;

		&:hover {
			background-color: ${({ theme }) => theme.colors.purple};
			color: ${({ theme }) => theme.colors.white};
		}
	}
`;

export const NavDropdown = styled.div`
	margin-left: 8px;
	position: relative;
	svg {
		width: 20px;
		height: 20px;
	}

	&:hover {
		${MenuDropDown} {
			display: block;
		}
	}
`;
