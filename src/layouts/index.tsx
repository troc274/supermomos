import React, { ReactNode } from "react";
// next
import Header from "./Header";

// ----------------------------------------------------------------------

type Props = {
	children: ReactNode;
};

export default function Layout({ children }: Props) {
	return (
		<div>
			<Header />
			{children}
		</div>
	);
}
