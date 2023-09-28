import Head from "next/head";
import { getFeaturedEvents } from "@/Dummy";
import EventList from "@/Components/events/EventList";
import NewsletterRegistration from "@/Components/input/newsletter-registration";

export default function AllEventsPage(props) {
	const { items } = props;
	const featuredEvents = items;

	return (
		<>
			<Head>
				<title>NextJS Events</title>
				<meta name="description" content="Find a lot of events" />
			</Head>

			<NewsletterRegistration />

			<ul>
				<EventList items={featuredEvents} />
			</ul>
		</>
	);
}

export async function getStaticProps() {
	const events = await getFeaturedEvents();

	return {
		props: {
			items: events,
		},
		revalidate : 600
	};
}
