import { CreateSocialForm } from "@/sections/home";
import { Container } from "@/styles/common";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Supermomos</title>
			</Head>
			<main>
				<Container>
					<CreateSocialForm />
				</Container>
			</main>
		</>
	);
}
