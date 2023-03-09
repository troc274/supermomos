import { createGlobalStyle, css } from "styled-components";

const fonts = css`
	@font-face {
		font-family: "Neue Haas Grotesk Display Pro";
		font-style: normal;
		font-weight: 400;
		src: local("Neue Haas Grotesk Display Pro"),
			url("./fonts/NeueHaasDisplayLight.woff") format("woff");
	}
	@font-face {
		font-family: "Neue Haas Grotesk Display Pro";
		font-style: italic;
		font-weight: 400;
		src: local("Neue Haas Grotesk Display Pro"),
			url("./fonts/NeueHaasDisplayLightItalic.woff") format("woff");
	}
	@font-face {
		font-family: "Neue Haas Grotesk Display Pro";
		font-style: normal;
		font-weight: 100;
		src: local("Neue Haas Grotesk Display Pro"),
			url("./fonts/NeueHaasDisplayXXThin.woff") format("woff");
	}
	@font-face {
		font-family: "Neue Haas Grotesk Display Pro";
		font-style: italic;
		font-weight: 100;
		src: local("Neue Haas Grotesk Display Pro"),
			url("./fonts/NeueHaasDisplayXXThinItalic.woff") format("woff");
	}
	@font-face {
		font-family: "Neue Haas Grotesk Display Pro";
		font-style: normal;
		font-weight: 200;
		src: local("Neue Haas Grotesk Display Pro"),
			url("./fonts/NeueHaasDisplayXThin.woff") format("woff");
	}
	@font-face {
		font-family: "Neue Haas Grotesk Display Pro";
		font-style: italic;
		font-weight: 200;
		src: local("Neue Haas Grotesk Display Pro"),
			url("./fonts/NeueHaasDisplayXThinItalic.woff") format("woff");
	}
	@font-face {
		font-family: "Neue Haas Grotesk Display Pro";
		font-style: normal;
		font-weight: 300;
		src: local("Neue Haas Grotesk Display Pro"),
			url("./fonts/NeueHaasDisplayThin.woff") format("woff");
	}
	@font-face {
		font-family: "Neue Haas Grotesk Display Pro";
		font-style: italic;
		font-weight: 300;
		src: local("Neue Haas Grotesk Display Pro"),
			url("./fonts/NeueHaasDisplayThinItalic.woff") format("woff");
	}
	@font-face {
		font-family: "Neue Haas Grotesk Display Pro";
		font-style: normal;
		font-weight: 500;
		src: local("Neue Haas Grotesk Display Pro"),
			url("./fonts/NeueHaasDisplayRoman.woff") format("woff");
	}
	@font-face {
		font-family: "Neue Haas Grotesk Display Pro";
		font-style: italic;
		font-weight: 500;
		src: local("Neue Haas Grotesk Display Pro"),
			url("./fonts/NeueHaasDisplayRomanItalic.woff") format("woff");
	}
	@font-face {
		font-family: "Neue Haas Grotesk Display Pro";
		font-style: normal;
		font-weight: 600;
		src: local("Neue Haas Grotesk Display Pro"),
			url("./fonts/NeueHaasDisplayMediu.woff") format("woff");
	}
	@font-face {
		font-family: "Neue Haas Grotesk Display Pro";
		font-style: italic;
		font-weight: 600;
		src: local("Neue Haas Grotesk Display Pro"),
			url("./fonts/NeueHaasDisplayMediumItalic.woff") format("woff");
	}
	@font-face {
		font-family: "Neue Haas Grotesk Display Pro";
		font-style: normal;
		font-weight: 700;
		src: local("Neue Haas Grotesk Display Pro"),
			url("./fonts/NeueHaasDisplayBold.woff") format("woff");
	}
	@font-face {
		font-family: "Neue Haas Grotesk Display Pro";
		font-style: italic;
		font-weight: 700;
		src: local("Neue Haas Grotesk Display Pro"),
			url("./fonts/NeueHaasDisplayBoldItalic.woff") format("woff");
	}
	@font-face {
		font-family: "Neue Haas Grotesk Display Pro";
		font-style: normal;
		font-weight: 900;
		src: local("Neue Haas Grotesk Display Pro"),
			url("./fonts/NeueHaasDisplayBlack.woff") format("woff");
	}
	@font-face {
		font-family: "Neue Haas Grotesk Display Pro";
		font-style: italic;
		font-weight: 900;
		src: local("Neue Haas Grotesk Display Pro"),
			url("./fonts/NeueHaasDisplayBlackItalic.woff") format("woff");
	}

	@font-face {
		font-family: "Roboto";
		font-style: normal;
		font-weight: 500;
		src: local("Roboto-Regular"),
			url("./fonts/Roboto-Regular.ttf") format("ttf");
	}

	@font-face {
		font-family: "Roboto";
		font-style: normal;
		font-weight: 700;
		src: local("Roboto-Bold"), url("./fonts/Roboto-Bold.ttf") format("ttf");
	}
`;

const reset = css`
	*[hidden] {
		display: none;
	}
	* {
		box-sizing: border-box;
	}
	body {
		overflow-x: hidden;
	}
	ol,
	ul,
	li {
		list-style: none;
	}
	a {
		text-decoration: none;
		-webkit-tap-highlight-color: transparent;
		&:hover,
		&:focus,
		&:active {
			outline: 0;
			box-shadow: none;
			text-decoration: none;
		}
	}
	img {
		max-width: 100%;
		vertical-align: middle;
	}
	button {
		background-color: transparent;
		cursor: pointer;
	}
	button,
	input,
	select {
		border: none;

		&:focus {
			outline: none;
			box-shadow: none;
		}
	}
`;

const base = css`
	html {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	body {
		margin: 0;
		padding: 0;
		min-height: 100vh;
		font-size: ${({ theme }) => theme.fontSize.base};
		font-weight: ${({ theme }) => theme.fontWeight.medium};
		color: ${({ theme }) => theme.colors.gray};
		font-family: "Roboto", sans-serif;
		background: linear-gradient(138.11deg, #fef452 0%, #942f70 121.92%);
	}

	input,
	textarea,
	button {
		font-family: "Roboto", sans-serif;
	}
`;

const GlobalStyle = createGlobalStyle`
  ${fonts}
  ${reset}
  ${base}
`;

export default GlobalStyle;
