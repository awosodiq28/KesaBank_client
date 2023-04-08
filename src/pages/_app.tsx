import { AuthProvider } from "@/components/AuthContext";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<Head>
				<title>Kesa Bank</title>
				<meta
					http-equiv="Content-Security-Policy"
					content="upgrade-insecure-requests"
				></meta>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AuthProvider>
	);
}
