import * as mixin from "./mixin";

declare module "styled-components" {
	export interface DefaultTheme {
		mixin: any;
		colors: {
			yellow: string;
			purple: string;
			darkBlue: string;
			white: string;
			gray: string;
			red: string;
		};
		fontSize: {
			xs: string;
			sm: string;
			base: string;
			md: string;
			lg: string;
			xl: string;
		};
		fontWeight: {
			regular: number;
			medium: number;
			bold: number;
		};
		zIndex: {
			base: number;
			dropdown: number;
			modal: number;
			tooltip: number;
			sidebar: number;
			header: number;
		};
	}
}

const colors = {
	yellow: "#FEF452",
	purple: "#942F70",
	darkBlue: "#14597A",
	white: "#ffffff",
	gray: "#333333",
	red: "#ff4d4f",
};

const fontSize = {
	xs: "12px",
	sm: "14px",
	base: "16px",
	md: "18px",
	lg: "20px",
	xl: "22px",
};

const fontWeight = {
	regular: 400,
	medium: 500,
	bold: 700,
};

const zIndex = {
	base: 1,
	dropdown: 99,
	modal: 99,
	tooltip: 100,
	sidebar: 200,
	header: 500,
};

export default {
	mixin,
	colors,
	fontSize,
	fontWeight,
	zIndex,
};
