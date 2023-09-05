import EventSummary from "@/Components/event-detail/event-summary";
import EventLogistics from "@/Components/event-detail/event-logistics";
import EventContent from "@/Components/event-detail/event-content";
import { getEventById } from "@/Dummy";
import { useRouter } from "next/router";
import { Fragment } from "react";
import ErrorAlert from "@/Components/UI/error-alert/error-alert";
import Button from "@/Components/UI/button";

export default function EventDetailPage() {
	const router = useRouter();
	const id = router.query.eventId;

	const event = getEventById(id);

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
				address={event.location}
				image={event.image}
				imageAlt={event.title}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</Fragment>
	);
}
