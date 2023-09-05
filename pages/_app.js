import Layout from "@/Components/layout/layout";
import { FavoritesContextProvider } from "@/Components/store/favorites";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<FavoritesContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</FavoritesContextProvider>
	);
}
