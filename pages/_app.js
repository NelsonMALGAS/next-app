import Layout from "@/Components/layout/layout";
import { FavoritesContextProvider } from "@/Components/store/favorites";
import "@/styles/globals.css";
import Head from "next/head";
import { NotificationContextProvider } from "@/Components/store/notification-context";


export default function App({ Component, pageProps }) {
	return (
		<NotificationContextProvider>
			<FavoritesContextProvider>
			<Head>
				<title>Next Events</title>
				<meta name="description" content="NextJS Events" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</FavoritesContextProvider>
		</NotificationContextProvider>
	);
}
