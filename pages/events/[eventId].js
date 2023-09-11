import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import ErrorAlert from "@/Components/UI/error-alert/error-alert";
import Button from "@/Components/UI/button";
import Comments from "@/Components/input/comments";
import { getEventById } from "@/Dummy";
import EventSummary from "@/Components/event-detail/event-summary";
import EventLogistics from "@/Components/event-detail/event-logistics";
import EventContent from "@/Components/event-detail/event-content";

export default function EventDetailPage() {
	const router = useRouter();
	const id = router.query.eventId;
	const [event, setEvent] = useState(null);

	useEffect(() => {
		const fetchEvent = async () => {
			try {
				const eventData = await getEventById(id);
				setEvent(eventData);
			} catch (error) {
				console.error("Error fetching event:", error);
				setEvent(null); // Set event to null if there's an error
			}
		};

		if (id) {
			fetchEvent();
		}
	}, [id]);

	if (!event) {
		return (
			<Fragment>
				<ErrorAlert>
					<p>No event found</p>
				</ErrorAlert>
				<div className="centre">
					<Button link="/events">Show All Events</Button>
				</div>
			</Fragment>
		);
	}

	return (
		<Fragment>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				location={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
			<Comments eventId={event.id} />
		</Fragment>
	);
}
