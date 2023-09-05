import { getAllEvents } from "@/Dummy";
import EventList from "@/Components/events/EventList";
import EventsSearch from "@/Components/events/events-search";
import { useRouter } from "next/router";

export default function AllEventsPage() {
	const events = getAllEvents();
	const router = useRouter();

	const findEventsHandler = (year, month) => {
		const fullPath = `/events/${year}/${month}`;
		router.push(fullPath);
	};

	return (
		<>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</>
	);
}
