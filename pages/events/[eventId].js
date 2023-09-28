import { Fragment } from "react";
import ErrorAlert from "@/Components/UI/error-alert/error-alert";
import Button from "@/Components/UI/button";
import Comments from "@/Components/input/comments";
import { getEventById, getAllEventIds } from "@/Dummy";
import EventSummary from "@/Components/event-detail/event-summary";
import EventLogistics from "@/Components/event-detail/event-logistics";
import EventContent from "@/Components/event-detail/event-content";

export default function EventDetailPage(props) {
	const { event, error } = props;
	
	if (error) {
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

// Fetch data at build time
export async function getStaticProps(context) {
	const eventId = context.params.eventId;

	try {
		const eventData = await getEventById(eventId);
		if (!eventData) {
			return {
				props: {
					error: true,
				},
			};
		}
		return {
			props: {
				event: eventData,
				error: false,
			},
			revalidate : 600
		};
	} catch (error) {
		return {
			props: {
				error: true,
			},
		};
	}
}

export async function getStaticPaths() {
	const allEventIds = await getAllEventIds();
	const paths = allEventIds.map((eventId) => ({
		params: { eventId },
	}));
	return {
		paths,
		fallback: "blocking",
	};
}
