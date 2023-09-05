import Head from "next/head";
import { getFeaturedEvents } from "@/Dummy";
import EventList from "@/Components/events/EventList";
export default function AllEventsPage() {
	const featuredEvents = getFeaturedEvents();

	return (
		<>
			<Head>
				<title>NextJS Events</title>
				<meta name="desciption" content="Find a lot of events" />
			</Head>
			<ul>
				<EventList items={featuredEvents} />
			</ul>
		</>
	);
}
