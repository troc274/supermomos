import React from "react";
import ChevronDown from "@/components/icon/ChevronDown";
import { Container } from "@/styles/common";
import Link from "next/link";
import * as S from "./style";

const Header = () => {
	const menuItems = [
		{
			pathname: "/blog",
			title: "Blog",
		},
		{
			pathname: "/socials",
			title: "Socials",
		},
		{
			pathname: "/past-socials",
			title: "Past Socials",
		},
		{
			pathname: "/clubs",
			title: "Clubs",
			childrens: [
				{
					pathname: "/clubs/subClub1",
					title: "Sub Club 1",
				},
				{
					pathname: "/clubs/subClub2",
					title: "Sub Club 2",
				},
				{
					pathname: "/clubs/subClub3",
					title: "Sub Club 3",
				},
			],
		},
		{
			pathname: "/contact",
			title: "Contact",
		},
	];

	return (
		<Container>
			<S.Wrapper>
				<S.Logo src="/logo.png" />
				<S.Nav>
					{menuItems.map((item) => (
						<S.NavItem key={item.pathname}>
							<Link href={item.pathname}>
								<S.NavLink>{item.title}</S.NavLink>
							</Link>
							{item.childrens && (
								<S.NavDropdown>
									<ChevronDown />
									<S.MenuDropDown>
										{item.childrens.map((childItem) => (
											<S.MenuDropDownItem key={childItem.pathname}>
												<Link href={childItem.pathname}>
													<S.NavLink>{childItem.title}</S.NavLink>
												</Link>
											</S.MenuDropDownItem>
										))}
									</S.MenuDropDown>
								</S.NavDropdown>
							)}
						</S.NavItem>
					))}
				</S.Nav>
			</S.Wrapper>
		</Container>
	);
};

export default Header;
