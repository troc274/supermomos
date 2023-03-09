import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyle from "@/styles/globalStyle";
import Layout from "@/layouts";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}
